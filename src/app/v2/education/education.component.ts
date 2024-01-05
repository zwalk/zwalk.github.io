import { Component } from '@angular/core';
import { Tiles } from '../constants/Tiles';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  label = "Education";
  tileList = new Tiles;
  tiles = this.tileList.getFilteredTiles(this.label);
}
