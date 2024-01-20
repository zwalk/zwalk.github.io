import { Component, HostListener, ViewChild } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from "ng-recaptcha";
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { LeavingModalComponent } from '../leaving-modal/leaving-modal.component';


declare const grecaptcha: any;

declare global {
  interface Window {
    grecaptcha: any;
  }
}

enum SocialLinks {
  "https://www.linkedin.com/in/zswalker/",
  "https://github.com/zwalk"
}

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  animations: [
    trigger('shake', [
      state('false', style({})),
      state('true', style({})),
      transition('false => true', animate('1s', keyframes([
        style({ transform: 'translateX(0)', offset: 0.1 }),
          style({ transform: 'translateX(5px)', offset: 0.2 }),
          style({ transform: 'translateX(-5px)', offset: 0.3 }),
          style({ transform: 'translateX(5px)', offset: 0.4 }),
          style({ transform: 'translateX(0)', offset: 0.5 })
      ])))
    ])]
})
export class ConnectComponent {
  label = "Connect";
  tileList = new Tiles;
  tiles = this.tileList.getFilteredTiles(this.label);
  formGroup = new FormGroup({
    "g-recaptcha-response": new FormControl('', [
      Validators.required
    ]),
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('', [
      Validators.required
    ]),
  });
  @ViewChild('#g-recaptcha-response') recaptchaElement : HTMLElement | undefined;
  captchaElement : HTMLElement | undefined;
  siteKeyCaptcha: string = '6LcAh0cpAAAAABsJHjujfrSlV-DP9Vy9LpakFChq';
  shouldSubmit = true;
  token : string = '';
  requiredList : string[] = [];
  beingVerb : string = '';
  emailIsValid = true;
  invalidName = false;
  invalidInputs : string[] = [];
  shake : boolean = false;
  formSuccess = false;
  formError = false;
  formSubmissionLoading = false;
  size : string = 'normal';
  isPhone : boolean = false;
  dialogRef : MatDialogRef<LeavingModalComponent> | undefined;

  constructor(
    private observer : BreakpointObserver,
    private dialog : MatDialog) {}

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize,', ['$event'])
  onResize() {
    this.observer.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
      }
    })
  }

  openModal(link : string) {
    if (this.dialogRef?.getState() == MatDialogState.OPEN) return;
    if (Object.values(SocialLinks).includes(link)) {
      this.dialogRef = this.dialog.open(LeavingModalComponent, {
        data: {
          link: link
        },
        width: '500px',
        direction: 'ltr'
      });
    } else {
      alert('WARNING: the link you attempted to follow appears to have been tampered with.')
    }
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }
    return prefix + name;
  }

  ngAfterViewInit() {
    grecaptcha.ready(() => {
        grecaptcha.render('captcha_element', {
          'sitekey': this.siteKeyCaptcha,
        });
    })

    this.captchaElement = this.recaptchaElement;
    this.captchaElement?.setAttribute('required', '');
  }

  shakeForm() {
    if (this.requiredList.length > 0 || !this.emailIsValid) {
      this.shake = true;
    }
  }

  async onSubmit() {
    this.formSubmissionLoading = true;
    const form = this.formGroup;
    this.token = grecaptcha.getResponse();
    form.patchValue({ "g-recaptcha-response": this.token });
    this.validate(form);

    if (this.shouldSubmit) {
      await fetch("https://formspree.io/f/xyyrybrb", {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(form.value)
      }).then((response) => {
        this.formSubmissionLoading = false;
        if (response.ok) {
          this.formSuccess = true;
        } else {
          this.formError = true;
        }
      })
    }
    this.formSubmissionLoading = false;
  }

  validate(form : FormGroup) {
    this.resetValidations();
    if (this.token == '') {
      this.shouldSubmit = false;
    }
    if (!form.valid) {
      form.markAllAsTouched();
      this.shouldSubmit = false;
      for (const field in this.formGroup.controls) {
        const control = this.formGroup.get(field);
        if (control != null && control.errors != null) {
          this.toggleInvalid(field);
          if (control.errors['required'] == true) {
            this.addToRequiredList(field);
          }
          if (field == 'email' && !control.valid) {
            this.emailIsValid = false;
          }
        }
      }
    }
    this.shakeForm();
    this.formatRequiredList();
  }

  resetValidations() {
    this.shouldSubmit = true;
    this.requiredList = [];
    this.emailIsValid = true;
    this.invalidInputs = [];
    const captcha: HTMLElement | null = document.querySelector('#captcha_element div');
    if (captcha) {
      captcha.style.border = '';
    }
  }

  resetForm() {
    this.resetValidations();
    this.formError = false;
    this.formSuccess = false;
    this.formSubmissionLoading = false;
  }

  toggleInvalid(field : string) {
    this.invalidInputs.push(field);
  }

  addToRequiredList(field : string) {
    if (field == "g-recaptcha-response") {
      this.requiredList.push(' human verification');
      // not very angular of me i know sorry
      const captcha: HTMLElement | null = document.querySelector('#captcha_element div');
      if (captcha) {
        captcha.style.border = '1px solid #d25252';
      }
      
    } else {
      this.requiredList.push(" " + field);
    }
  }

  formatRequiredList() {
    if (this.requiredList!= undefined && this.requiredList.length > 1) {
      this.requiredList[this.requiredList.length - 1] = " and " + this.requiredList[this.requiredList.length - 1];
      this.beingVerb = 'are';
    } else {
      this.beingVerb = 'is';
    }
  }

  spin(el : HTMLElement) {
    if (el.nodeName == 'DIV') {
      el.classList.add('spin');
    }
  }

  backToStart(el : HTMLElement) {
    if (el.nodeName == 'DIV') {
      el.classList.remove('spin');
    }
  }

}
