import { Component, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { fallAnimation } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("fall", [
      state('true', style({ transform: 'translateY(100%)', display: 'none'})),
      state('false', style({})),
      transition("0 => 1", [useAnimation(fallAnimation)])]
    ),
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
        this.isPhoneLandscape = false;
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
      } else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.isPhoneLandscape = true;
        this.isPhone = false;
        this.isTablet = false;
        this.fall = true;
      } else if (breakpoints[Breakpoints.TabletPortrait]) {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = true;
        this.fall = false;
        this.showLandscapeMessage = false;
      } else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.isPhone = false;
        this.isPhoneLandscape = true;
        this.isTablet = false;
        this.fall = true;
      } else {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
      }
    })
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-';
    } else if (this.isTablet) {
      prefix = 'tablet-';
    } else {
      prefix = '';
    }
    return prefix + name;
  }

  shouldShowLandscapeMessage() {
    if  (this.isPhoneLandscape) {
      this.showLandscapeMessage = true;
    }
  }
}
