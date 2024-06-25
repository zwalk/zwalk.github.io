import { Component, ElementRef, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { interval, Subscription } from 'rxjs';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { fallAnimation } from '../animations';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [
    trigger("fall", [
      state('true', style({ transform: 'translateY(10000%)', display: 'none'})),
      state('false', style({})),
      transition("0 => 1", [useAnimation(fallAnimation)])]
    ),
    trigger("fadeIn", [
      state('true', style({ opacity: 1})),
      state('false', style({ opacity: 0})),
      transition("0=>1", animate(2000))
    ])
  ]
})
export class WorkComponent {
  label = "Work";
  // nav tiles
  tileList : Tiles = new Tiles;
  tiles : Tile[] = this.tileList.getFilteredTiles(this.label);

  // work and projects tiles
  workTiles : WorkTile[] = [{
      id: 1,
      img: "assets/v2/img/cmm2.png",
      roles: [{ jobTitle: "Software Engineer"} as Role],
      dates: "June 2021 - Present",
      url: "https://www.covermymeds.com/main/about",
      overlayText: "Click To Visit CoverMyMeds' website"
    },
    {
      id: 2,
      img: "assets/v2/img/nw2.jpeg",
      roles: [
              {jobTitle: "Senior Developer"} as Role,
            ],
      dates: "May 2019 - May 2021",
      url: 'https://www.nationwide.com/personal/about-us/',
      overlayText: "Click To Visit Nationwide's website"
    },
    {
      id: 3,
      img: "assets/v2/img/wedding3.png",
      roles: [
        {jobTitle: "Wedding site"} as Role
      ],
      dates: "Designed and Developed in 2021",
      url: 'https://www.chrisandmiranda.com/',
      overlayText: "Click to Visit the Wedding website"
    }
  ]
  isPhone : boolean = false;
  isPhoneLandscape : boolean = false;
  isTablet : boolean = false;
  fall : boolean = false;
  showLandscapeMessage : boolean = false;
  currentIndex = 0;
  currentTile : WorkTile | undefined = this.workTiles[this.currentIndex];
  source = interval(5000);
  subscription : Subscription | undefined;
  paused : boolean = false;
  show : boolean = true;
  animationState : string = 'stable';
  shouldGetNext : boolean = false;
  shouldGetPrevious : boolean = false;
  specifiedTile : WorkTile | undefined;

  constructor(private observer : BreakpointObserver) {}

  updateAnimationState(value : string) {
    this.animationState = value;
    if (this.animationState == 'stable') {

      if (this.shouldGetNext) {
        this.shouldGetNext = false;
        this.getNextTile();
      }

      if (this.shouldGetPrevious) {
        this.shouldGetPrevious = false;
        this.getPreviousTile();
      }

      if (this.specifiedTile) {
        this.currentTile = this.specifiedTile;
        this.currentIndex = this.workTiles.indexOf(this.specifiedTile);
        this.specifiedTile = undefined;
      }
    }
  }
  
  ngOnInit() {
    this.observer.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape
    ])
    .subscribe(result => {
      const breakpoints = result.breakpoints;

      if (!breakpoints[Breakpoints.TabletPortrait] && this.workTiles[0].id == 3) {
        this.workTiles = this.workTiles.reverse();
      }

      if (breakpoints[Breakpoints.HandsetPortrait]) {
        if (this.subscription == undefined) {
          this.subscription = this.source.subscribe(() => this.fade(false) )
        }
        if (this.currentTile == undefined) {
          this.currentTile = this.workTiles[0];
        }
        this.isPhone = true;
        this.isPhoneLandscape = false;
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
      } else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.isPhone = true;
        this.isPhoneLandscape = true;
        this.isTablet = false;
        this.fall = true;
      } else if (breakpoints[Breakpoints.TabletPortrait]) {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = true;
        this.fall = false;
        this.showLandscapeMessage = false;
        if(this.workTiles[0].id == 1) this.workTiles = this.workTiles.reverse();
      } else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = true;
        this.fall = true;
        this.showLandscapeMessage = true;
      } else {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = false;
        this.fall = false;
        this.showLandscapeMessage = false;
      }
    })

    // ipad pro
    this.observer.observe('(min-width:768px) and (max-width: 1024px)')
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = false;
        this.isTablet = true;
      } else {
        this.isTablet = false;
      }
    })
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  isCurrentTile(tile : WorkTile) {
    return this.currentTile == tile;
  }


  fade(bypass: boolean) {
    if (!this.paused || bypass) {
      if (bypass) {
        this.paused = true;
      }
      this.currentTile = undefined;
      this.shouldGetNext = true;
    }
  }

  fadeToTile(tile : WorkTile) {
    this.paused = true;
    this.currentTile = undefined;
    this.specifiedTile = tile;
  }

  fadeBack() {
    this.paused = true;
    this.currentTile = undefined;
    this.shouldGetPrevious = true;
  }

  getNextTile() {
    const lastIndex = this.workTiles.length - 1;
    if (this.currentIndex == lastIndex) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
    this.currentTile = this.workTiles[this.currentIndex];
  }

  getPreviousTile() {
    const lastIndex = this.workTiles.length - 1;
    if (this.currentIndex == 0) {
      this.currentIndex = lastIndex;
    } else {
      this.currentIndex--;
    }
    this.currentTile = this.workTiles[this.currentIndex];
  }


  setPause(bool : boolean) {
    this.paused = bool;
  }


  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }
    if (this.isTablet) {
      prefix = 'tablet-';
    }
    return prefix + name;
  }

   goToResume = () => {
    window.location.href = '/assets/v2/files/zach_walker_resume.pdf';
  }

  shouldShowLandscapeMessage() {
    if  (this.isPhoneLandscape) {
      this.showLandscapeMessage = true;
    }
  }
}
