import { Component, HostListener, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { fallAnimation } from '../animations';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css'],
  animations: [
    trigger("fall", [
      state('true', style({ transform: 'translateY(10000%)', display: 'none'})),
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
export class PageTitleComponent {
  @Input() title : string | undefined;
  @Input() tiles : Tile[] = [{
    imgUrl: undefined,
    videoUrl : undefined,
    pageUrl: undefined,
    label: undefined,
    startTime: 0
  }];
  @Input() buttonText : string | undefined = undefined;
  hasButton: boolean = false;
  @Input() buttonFunction: ()=> void = () => {}; 
  isPhone : boolean = false;
  isTablet : boolean = false;
  fall : boolean = false;
  @Input() smallLabels : boolean = false;

  constructor(private observer : BreakpointObserver) {}
  
  ngOnInit() {
    this.hasButton = this.buttonText != undefined;

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
      } else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.isPhone = true;
        this.isTablet = false;
        this.fall = true;
      } else if (breakpoints[Breakpoints.TabletPortrait]) {
        this.isPhone = false;
        this.isTablet = true;
        this.fall = false;
      } else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.isPhone = false;
        this.isTablet = false;
        this.fall = true;
      } else {
        this.isPhone = false;
        this.isTablet = false;
        this.fall = false;
      }
    })
  }

  @HostListener('window:resize', ['$event'])
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
      prefix = 'phone-'
    }
    if (this.isTablet) {
      prefix = 'tablet-';
    }
    return prefix + name;
  }
}
