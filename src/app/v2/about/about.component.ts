import { Component, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { DateTime } from 'luxon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { fallAnimation } from '../animations';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
export class AboutComponent {
  label = "About";
  tileList = new Tiles;
  tiles = this.tileList.getFilteredTiles(this.label);
  years = this.getYears();
  isPhone : boolean = false;
  isTablet : boolean = false;
  defaultMessage = `
  Hi, I'm Zach. I love to write code! I am based in the Columbus, Ohio area with my wife, our Basset Hound, and our cat. I have experience in 
  multiple industries building and maintaining enterprise code. Prior to 2019, My career path was in sales, but I found myself wanting to 
  pursue my passion for software. I went through the Tech Elevator coding bootcamp program and never looked back! I am beyond grateful 
  for the opportunity I have had since then and the great people I have been able to meet and work with. My interests
  outside of programming are traveling with my wife, good coffee, bourbon and rye whiskey, gaming, learning the guitar and unfortunately 
  I'm a loyal fan of the Cleveland Browns. Thanks for stopping by!
  `
  message : string = this.defaultMessage;
  showLandscapeMessage : boolean = false;
  fall : boolean = false;
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
        this.isPhone = true;
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
        this.isTablet = false;
        this.fall = true;
        this.isLandscape = true;
      } else {
        this.isPhone = false;
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
        this.isLandscape = false;
      }

    // ipad pro
    this.observer.observe('(min-width:768px) and (max-width: 1024px)')
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isTablet = true;
      } else {
        this.isTablet = false;
      }
    })

      this.setMessage(this.isPhone);
    })
  }

  setMessage(isPhone : boolean) {
    if (this.isPhone) {
      this.message = `
      Hi, I'm Zach. I love to code! I am based in the Columbus, Ohio area with my wife, our Basset Hound, and our cat. I have experience in 
      multiple industries building and maintaining enterprise code. Thanks for stopping by!
      `
    } else {
      this.message = this.defaultMessage;
    }
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }
    if (this.isTablet) {
      prefix = 'tablet-';
    }
    return prefix + name;
  }

  getYears() : number | undefined {
    const now = DateTime.now();
    const years = now.diff(DateTime.fromISO('2019-05-01'), 'years').toObject()['years'];
    return years != undefined ? Math.trunc(years) : undefined;
  }

  shouldShowLandscapeMessage() {
    if  (this.isLandscape) {
      this.showLandscapeMessage = true;
    }
  }
}
