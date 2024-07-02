import { Component } from '@angular/core';
import { Router, RouterEvent, Event, NavigationEnd } from '@angular/router';
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
  version = 2;

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

     this.router.events.subscribe((routeEvent)=> {
      if (routeEvent instanceof NavigationEnd && routeEvent.url.toLowerCase().includes('v1')) {
        this.version = 1;
      } else if (routeEvent instanceof NavigationEnd && !routeEvent.url.toLowerCase().includes('v1')) {
        this.version = 2;
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
    return !this.router.url.includes('v1');
  }
}
