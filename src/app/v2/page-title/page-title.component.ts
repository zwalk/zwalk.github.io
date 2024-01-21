import { Component, HostListener, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
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
  @Input() smallLabels : boolean = false;

  constructor(private observer : BreakpointObserver) {}
  
  ngOnInit() {
    this.hasButton = this.buttonText != undefined;

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
      prefix = 'phone-'
    }
    if (this.isTablet) {
      prefix = 'tablet-';
    }
    return prefix + name;
  }
}
