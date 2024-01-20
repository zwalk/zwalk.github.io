import { Component, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  label = "Home";
  tileList = new Tiles;
  tiles: Tile[] = this.tileList.ALL_TILES.filter((tile) => tile.label != this.label);
  isPhone : boolean = false;
  isTablet : boolean = false;

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
}
