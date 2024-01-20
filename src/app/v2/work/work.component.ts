import { Component, ElementRef, HostListener } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
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
              {jobTitle: "Senior Developer", subTitle: " (promoted Dec 2020)"} as Role,
              {jobTitle: "Developer"} as Role
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
    this.onResize();
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  @HostListener('window:resize,', ['$event'])
  onResize() {
    this.observer.observe(Breakpoints.HandsetPortrait)
    .subscribe(result => {
      if (result.matches) {
        this.isPhone = true;
      } else {
        this.isPhone = false;
      }
    })

    if (this.isPhone) {
      this.subscription = this.source.subscribe(() => this.fade(false) )
    }
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
    return prefix + name;
  }

   goToResume = () => {
    window.location.href = 'assets/v2/files/ZachWalker_resume.pdf';
  }
}
