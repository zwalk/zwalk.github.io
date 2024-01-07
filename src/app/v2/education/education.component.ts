import { Component, QueryList, ViewChildren } from '@angular/core';
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
  @ViewChildren('educationTile') educationTiles : QueryList<HTMLElement> | undefined;
  flipped: boolean = false;
  buttonText: string = 'Bonus pictures'


  flip() {
    this.flipped = !this.flipped;
    this.flipped ? this.buttonText = 'Flip Back' : this.buttonText = 'Bonus pictures';
  }
}
