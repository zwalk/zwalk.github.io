import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isPhone : boolean = false;
  isPhoneLandscape : boolean = false;
  isTablet : boolean = false;
  isTabletLandscape : boolean = false;

  constructor(private observer : BreakpointObserver) {}
  
  ngOnInit() {
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.observer.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = true;
        this.isTablet = false;
        this.isPhoneLandscape = false;
        this.isTabletLandscape = false;
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
        this.isTabletLandscape = false;
      } else {
        this.isPhoneLandscape = false;
      }
    })

    this.observer.observe(Breakpoints.TabletPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isTablet = true;
        this.isTabletLandscape = false;
        this.isPhoneLandscape = false;
      } else {
        this.isTablet = false;
      }
    })

    this.observer.observe(Breakpoints.TabletLandscape)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTabletLandscape = true;
        this.isTablet = false;
      }
    })
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }

    if (this.isPhoneLandscape)   {
      prefix = 'phone-landscape-';
    }

    if (this.isTablet) {
      prefix = 'tablet-';
    }

    if (this.isTabletLandscape) {
      prefix = 'tablet-landscape-';
    }
    return prefix + name;
  }
}
