import { Component } from '@angular/core';
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

  constructor(private observer : BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        if (result.matches) {
          this.isPhone = true;
        }
      })
  }
}
