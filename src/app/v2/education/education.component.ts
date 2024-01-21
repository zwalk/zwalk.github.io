import { Component, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LeavingModalComponent } from '../leaving-modal/leaving-modal.component';

enum ModalLinks {
  osu = "https://fisher.osu.edu/",
  techElevator = "https://www.techelevator.com/"
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger("showDetail", [
      state('true', style({ transform: 'none'})),
      state('false', style({})),
      transition("0 <=> 1", animate(0))
    ]),
    trigger('widen', [
      state("true", style({ "flex-basis": '100%'})),
      state("false", style({})),
      transition("0 <=> 1", animate(200))
    ]),
    trigger("hide", [
      state("true", style({ opacity: 0})),
      state("false", style({ opacity: 1 })),
      transition("0 <=> 1", animate(100))
    ])
  ]
})
export class EducationComponent {
  label = "Education";
  tileList = new Tiles;
  tiles = this.tileList.getFilteredTiles(this.label);
  flipped: boolean = false;
  buttonText: string = 'Bonus pictures'
  spaceRule = 'flex-end';
  isPhone : boolean = false;
  isTablet : boolean = false;
  shownTile : HTMLDivElement | undefined;
  hiddenTile : HTMLDivElement | undefined;
  hideAnimationState = 'stable';
  showDetailState = 'stable';
  widen : boolean = false;
  showDetail : boolean = false;
  link = 'pizza'

  constructor(private observer : BreakpointObserver, private dialog : MatDialog) {}

  ngOnInit() {
    this.onResize();
  }


  @HostListener('window:resize,', ['$event'])
  onResize() {
    this.observer.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = true;
        this.isTablet = false;
      } else {
        this.isPhone = false;
      }
    })

    this.observer.observe(Breakpoints.Tablet)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isTablet = true;
      } else {
        this.isTablet = false;
      }
    })
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-';
    }
    if (this.isTablet) {
      prefix = 'tablet-';
    }
    return prefix + name;
  }

  openModal(linkName : string, event: Event) {
    if (this.shownTile || (!this.isPhone && !this.isTablet)) {
      event.stopPropagation();
      const link = linkName == 'osu' ? ModalLinks.osu : ModalLinks.techElevator;

      this.dialog.open(LeavingModalComponent, {
        data: {
          link: link
        }
      });
    }
  }

  flip() {
    this.flipped = !this.flipped;
    this.flipped ? this.buttonText = 'Flip Back' : this.buttonText = 'Bonus pictures';
  }

  showTile(tile : HTMLDivElement, hideTile: HTMLDivElement) {
    if (this.shownTile == tile) {
      this.shownTile = undefined;
      this.hiddenTile = undefined;
    } else {
      this.hiddenTile = hideTile;
      this.shownTile = tile;
    }
  }

  setShowDetail(bool : boolean) {
    this.showDetail = bool;
  }

  shouldShow(tile : HTMLDivElement) {
    return (this.isPhone || this.isTablet) && this.shownTile == tile &&  this.hideAnimationState == 'stable';
  }

  isHidden(tile : HTMLDivElement) {
    return (this.isPhone || this.isTablet) && this.hiddenTile == tile;
  }

  setHideState(state : string) {
    this.hideAnimationState = state;
  }

  setShowDetailState(state : string) {
    this.showDetailState = state;
  }

  setWiden(bool : boolean) {
    this.widen = bool;
  }

  shouldWiden(tile : HTMLDivElement) {
    return (this.isPhone || this.isTablet) && this.widen == true && this.shownTile == tile;
  }
}
