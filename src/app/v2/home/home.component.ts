import { Component, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("fall", [
      state('true', style({ transform: 'translateY(10000%)'})),
      state('false', style({})),
      transition("0 => 1", animate(2500, keyframes([
        style({ transform: 'translateY(0%) rotate(36deg)', offset: 0.1 }),
          style({ transform: 'translateY(50%) rotate(72deg)', offset: 0.2 }),
          style({ transform: 'translateY(100%) rotate(108deg)', offset: 0.3 }),
          style({ transform: 'translateY(150%) rotate(144deg)', offset: 0.4 }),
          style({ transform: 'translateY(200%) rotate(180deg)', offset: 0.5 })
      ])))
    ]),
    trigger("fadeIn", [
      state('true', style({ opacity: 1})),
      state('false', style({ opacity: 0})),
      transition("0=>1", animate(2000))
    ])
  ]
})
export class HomeComponent {
  label = "Home";
  tileList = new Tiles;
  tiles: Tile[] = this.tileList.ALL_TILES.filter((tile) => tile.label != this.label);
  isPhone : boolean = false;
  isPhoneLandscape : boolean = false;
  isTablet : boolean = false;
  fall : boolean = false;
  showLandscapeMessage : boolean = false;

  constructor(private observer : BreakpointObserver) {}

  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize,', ['$event'])
  onResize() {
    this.observer.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = true;
        this.isPhoneLandscape = false;
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
      } else {
        this.isPhone = false;
      }
    })

    this.observer.observe(Breakpoints.HandsetLandscape)
    .subscribe(result => {
      if (result.matches) {
        this.isPhoneLandscape = true;
        this.isPhone = false;
        this.isTablet = false;
        this.fall = true;
      } else {
        this.isPhoneLandscape = false;
      }
    })

    this.observer.observe(Breakpoints.TabletPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = true;
        this.fall = false;
        this.showLandscapeMessage = false;
      } else {
        this.isTablet = false;
      }
    })

    this.observer.observe(Breakpoints.TabletLandscape)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isPhoneLandscape = true;
        this.isTablet = false;
        this.fall = true;
        this.showLandscapeMessage = true;
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

  shouldShowLandscapeMessage() {
    if  (this.isPhoneLandscape) {
      this.showLandscapeMessage = true;
    }
  }
}
