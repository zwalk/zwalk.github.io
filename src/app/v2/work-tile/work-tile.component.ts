import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { LeavingModalComponent } from '../leaving-modal/leaving-modal.component';
import { fallAnimation } from '../animations';

enum WorkModalLinks {
  "https://www.covermymeds.com/main/about",
  "https://www.nationwide.com/personal/about-us/",
  "https://www.chrisandmiranda.com/"
}

declare global {
  class WorkTile {
    id : number | undefined;
    img : string | undefined;
    roles : Role[];
    dates : string | undefined;
    url: string | undefined;
    overlayText : string | undefined;
  }

  class Role {
    jobTitle : string | undefined;
    subTitle : string | undefined;
  }
}

@Component({
  selector: 'app-work-tile',
  templateUrl: './work-tile.component.html',
  styleUrls: ['./work-tile.component.css'],
  animations: [
    trigger("simpleFadeAnimation", [
      state('in', style({ opacity: 1})),
      transition(":enter", [style({ opacity: 0 }), animate(300)]),
      transition(":leave", animate(300, style({ opacity: 0 })))
    ])
  ]
})
export class WorkTileComponent {
  @Input() workTile: WorkTile | undefined = {
    id : undefined,
    img : undefined,
    roles: [],
    dates: undefined,
    url: undefined,
    overlayText: undefined
  };
  shouldShowOverlay : boolean = false;
  isPhone : boolean = false;
  fall : boolean = false;
  @Output() animationEvent = new EventEmitter<string>();
  dialogRef : MatDialogRef<LeavingModalComponent> | undefined;

  updateAnimationState(value: string) {
    this.animationEvent.emit(value);
  }

  constructor(private observer : BreakpointObserver, private dialog : MatDialog) {}
  
  ngOnInit() {
    this.observer.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape
    ])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      if (breakpoints[Breakpoints.HandsetPortrait]) {
        this.isPhone = true;
      } else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.isPhone = true;
      } else if (breakpoints[Breakpoints.TabletPortrait]) {
        this.isPhone = false;
      } else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.isPhone = false;
      } else {
        this.isPhone = false;
      }
    })
  }

  openModal(link : string) {
    if (this.dialogRef?.getState() == MatDialogState.OPEN) return;
    if (Object.values(WorkModalLinks).includes(link)) {
      this.dialogRef = this.dialog.open(LeavingModalComponent, {
        data: {
          link: link
        }
      });
    }
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }
    return prefix + name;
  }

  showOverlay() {
    if (!this.isPhone) {
      this.shouldShowOverlay = true;
    }
  }

  hideOverlay() {
    this.shouldShowOverlay = false;
  }

  goToUrl() {
    if (this.workTile?.url != undefined) {
      this.openModal(this.workTile.url);
    } else {
      console.error('attempted to navigate to a url that was undefined');
    }
  }
}
