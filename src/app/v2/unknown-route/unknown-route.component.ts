import { Component, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { fallAnimation } from '../animations';

@Component({
  selector: 'app-unknown-route',
  templateUrl: './unknown-route.component.html',
  styleUrls: ['./unknown-route.component.css'],
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
export class UnknownRouteComponent {
  tileService = new Tiles;
  tiles : Tile[] =  this.tileService.getAllTiles();
  isPhone : boolean = false;
  isTablet : boolean = false;
  fall : boolean = false;
  showLandscapeMessage : boolean = false;
  isLandscape : boolean = false;

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
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
        this.isLandscape = false;
      } else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.isPhone = false;
        this.isTablet = false;
        this.fall = true;
        this.isLandscape = true;
      } else if (breakpoints[Breakpoints.TabletPortrait]) {
        this.isPhone = false;
        this.isTablet = true;
        this.fall = false;
        this.showLandscapeMessage = false;
        this.isLandscape = false;
      } else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.isPhone = false;
        this.isTablet = true;
        this.fall = true;
        this.isLandscape = true;
      } else {
        this.isPhone = false;
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
        this.isLandscape = false;
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
    if  (this.isLandscape) {
      this.showLandscapeMessage = true;
    }
  }
}
