import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { fallAnimation } from '../animations';

declare global {
  class Tile {
    videoUrl: string | undefined;
    imgUrl: string | undefined;
    pageUrl: string | undefined;
    label: string | undefined;
    startTime: number;
  }
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  animations: [
    trigger("fall", [
      state('true', style({ transform: 'translateY(10000%)'})),
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
export class TileComponent {
  startTime: number = 0;
  url: string | undefined;
  label: string | undefined;
  @Input() tile: Tile = {
    videoUrl: undefined,
    imgUrl: undefined,
    pageUrl: undefined,
    label: undefined, 
    startTime: 0
  };
  @ViewChild('vid', { static: true }) videoRef: ElementRef<HTMLVideoElement> | undefined;
  video: HTMLVideoElement | undefined;
  isPhone : boolean = false;
  isTablet : boolean = false;
  isPhoneLandscape : boolean = false;
  fall : boolean = false;
  
  @Input() smallLabels : boolean = true;

  constructor(private observer : BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape
    ])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      if (breakpoints[Breakpoints.HandsetPortrait]) {
        this.isPhone = true;
        this.isPhoneLandscape = false;
        this.isTablet = false;
        this.fall = false;
      } else if (breakpoints[Breakpoints.HandsetLandscape]) {
        this.isPhoneLandscape = true;
        this.isPhone = false;
        this.isTablet = false;
        this.fall = true;
      } else if (breakpoints[Breakpoints.TabletPortrait]) {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = true;
        this.fall = false;
      } else if (breakpoints[Breakpoints.TabletLandscape]) {
        this.isPhone = false;
        this.isPhoneLandscape = true;
        this.isTablet = false;
        this.fall = true;
      } else {
        this.isPhone = false;
        this.isPhoneLandscape = false;
        this.isTablet = false;
        this.fall = false;
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

  ngAfterViewInit() {
    this.video = this.videoRef?.nativeElement;
  }

  playVideo() {
    if (this.video != undefined) {
      this.video.muted = true;
      this.video.setAttribute('playsinline', '')
      this.video.style.filter = 'blur(0px)';
      this.video.playbackRate = 1.75;
      this.video.play();
    } else {
      console.log('video was undefined!');
    }

  }

  resetVideo() {
    if (this.video != undefined) {
      this.video.currentTime = this.tile.startTime;
      this.video.style.filter = 'blur(1.5px)';
      this.video.pause();
    } else {
      console.log('video was undefined!');
    }
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }
    return prefix + name;
  }

}
