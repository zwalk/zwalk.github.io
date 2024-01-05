import { Component } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import * as moment from 'moment';
moment().format();


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

  getYears() {
    const now = moment();
    // return moment([2019, 4, 1]).toNow(true).slice(0,1);
    return now.diff(moment([2019, 4, 1]), 'years');
  }
}
