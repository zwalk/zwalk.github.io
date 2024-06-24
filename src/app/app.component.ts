import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from './background.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router,
    private backgroundService : BackgroundService
  ) { }
  title = 'v2';
  showStars = this.backgroundService.background == 'stars';
  showClouds = this.backgroundService.background == 'clouds';

  ngOnInit() {
    this.backgroundService.background$.subscribe(background => {
      if (background.toString() == 'stars') {
        this.showStars = true;
        this.showClouds = false;
        localStorage.setItem('showStars', 'true');
        localStorage.setItem('showClouds', 'false');
      } else if (background.toString() == 'clouds') {
        this.showClouds = true;
        this.showStars = false;
        localStorage.setItem('showStars', 'false');
        localStorage.setItem('showClouds', 'true');
      }
     })
  }

  getFromLocalStorage(key : string) {
    if (localStorage.getItem(key) == 'false') {
        return false;
    }
    return true;
  }

  shouldShowV1Button() {
    return !this.router.url.includes('v1')
  }
}
