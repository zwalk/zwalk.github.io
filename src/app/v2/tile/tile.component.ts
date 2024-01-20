import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

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
  styleUrls: ['./tile.component.css']
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
  
  @Input() smallLabels : boolean = true;

  constructor(private observer : BreakpointObserver) {}

  ngOnInit() {
   this.onResize();
  }

  ngAfterViewInit() {
    this.video = this.videoRef?.nativeElement;
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
