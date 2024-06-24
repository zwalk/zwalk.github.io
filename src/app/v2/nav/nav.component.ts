import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { MotionService } from 'src/app/motion.service';
import { BackgroundService } from 'src/app/background.service';

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
  stopMotionChecked = true;
  backgroundChecked = false;
  isMenuOpen = false;

  constructor(private observer : BreakpointObserver,
    private motionService : MotionService,
    private backgroundService : BackgroundService) {}
  
  ngOnInit() {
    this.onResize();
  }

  stopOrStart(val : string[]) {
    if (val.includes('run')) {
      this.motionService.setStopMotion(false);
    } else {
      this.motionService.setStopMotion(true);
    }
  }

  stopMotionValue() {
    if (localStorage.getItem('stopMotion') == 'true') {
      return [];
    } else {
      return ["run"];
    }
  }

  chooseBackground(name : string) {
    if (name == 'stars') {
      this.backgroundService.chooseBackground('stars');
    } else if (name == 'clouds') {
      this.backgroundService.chooseBackground('clouds');
    } else {
      this.backgroundService.chooseBackground('stars');
    }
  }

  valueForToggles() {
    if(localStorage.getItem('showStars') == 'true') {
      return 'stars';
    } else if (localStorage.getItem('showClouds') == 'true') {
      return 'clouds';
    } else {
      return 'stars';
    }
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
