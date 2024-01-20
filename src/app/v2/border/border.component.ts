import { Component, HostListener, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.css']
})
export class BorderComponent {
  isPhone : boolean = false;
  @Input() spaceRule : string = '';

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
      } else {
        this.isPhone = false;
      }
    })
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }
    return prefix + name;
  }

}
