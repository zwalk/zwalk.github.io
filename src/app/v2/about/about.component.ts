import { Component } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { DateTime } from 'luxon';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  label = "About";
  tileList = new Tiles;
  tiles = this.tileList.getFilteredTiles(this.label);
  years = this.getYears();

  getYears() : number | undefined {
    const now = DateTime.now();
    const years = now.diff(DateTime.fromISO('2019-05-01'), 'years').toObject()['years'];
    return years != undefined ? Math.trunc(years) : undefined;
  }
}
