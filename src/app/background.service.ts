import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

enum Background {
  STARS = 'stars',
  CLOUDS = 'clouds',
  INVALID = ''
}

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  background : Background = this.determineDefault();
  backgroundChoice = new Subject<Background>();
  background$ = this.backgroundChoice.asObservable();

  constructor() { }

  determineDefault() {
    if (localStorage.getItem('showStars') == 'true') {
      return Background.STARS;
    } else if (localStorage.getItem('showClouds') == 'true') {
      return Background.CLOUDS;
    } else {
      return Background.STARS;
    }
  }

  chooseBackground(name : string) {
    this.background = this.getBackgroundName(name);
    this.backgroundChoice.next(this.background);
  }

  getBackgroundName(name : string) {
    switch(name) {
      case('stars'): {
        return Background.STARS
      }
      case('clouds'): {
        return Background.CLOUDS
      }
    }
    return Background.INVALID;
  }
}
