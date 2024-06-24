import { Component, HostListener, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BackgroundService } from 'src/app/background.service';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent {
  isPhone : boolean = false;
  isTablet : boolean = false;
  @Input() spaceRule : string = '';
  color = this.determineDefault();


  constructor(private observer : BreakpointObserver,
    private backgroundService : BackgroundService
  ) {}

  ngOnInit() {
    this.onResize();
    this.backgroundService.background$.subscribe(background => {
      if (background == 'stars') {
        this.color = 'white';
      } else if (background == 'clouds') {
        this.color = 'black';
      }
    })
  }

  determineDefault() {
    const background = this.backgroundService.background.toString();
    if(background === 'stars') {
      return 'white';
    } else if (background === 'clouds') {
      return 'black';
    } else {
      return 'black';
    }
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

    this.observer.observe(Breakpoints.HandsetLandscape)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = true;
        this.isTablet = false;
      }
    })

    this.observer.observe(Breakpoints.TabletPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isTablet = true;
      } else {
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

    if (this.isTablet) {
      prefix = 'tablet-';
    }
    return prefix + name;
  }

}
