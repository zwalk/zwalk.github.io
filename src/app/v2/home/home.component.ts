import { Component } from '@angular/core';
import { Tiles } from '../constants/Tiles'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  label = "Home";
  tileList = new Tiles;
  tiles: Tile[] = this.tileList.ALL_TILES.filter((tile) => tile.label != this.label);
}
