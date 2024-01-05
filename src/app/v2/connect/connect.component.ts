import { Component } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
})
export class ConnectComponent {
  label = "Connect";
  tileList = new Tiles;
  tiles = this.tileList.getFilteredTiles(this.label);
  formGroup = new FormGroup({
    captcha: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });
  SECRET_KEY = "ES_51dd3f62ba0940aa8cede74a8070ad22";
  VERIFY_URL = "https://api.hcaptcha.com/siteverify";


  onVerify(token: string) {
    console.log('token: ' + token);
  }

  async onSubmit() {
    console.log(this.formGroup.value);

    const response = await fetch(this.VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        'secret': this.SECRET_KEY,
        'response': this.formGroup.value['captcha']
      })
    }).then(function(response) {
      console.log(response);
    })
    
  }

  spin(el : HTMLElement) {
    if (el.nodeName == 'A') {
      el.classList.add('spin');
    }
  }

  backToStart(el : HTMLElement) {
    if (el.nodeName == 'A') {
      el.classList.remove('spin');
    }
  }

}
