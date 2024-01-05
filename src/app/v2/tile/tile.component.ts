import { Component, ElementRef, Input, ViewChild } from '@angular/core';

declare global {
  class Tile {
    videoUrl: string | undefined;
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
    pageUrl: undefined,
    label: undefined, 
    startTime: 0
  };
  @ViewChild('vid', { static: true }) videoRef: ElementRef<HTMLVideoElement> | undefined;
  video: HTMLVideoElement | undefined;

  ngAfterViewInit() {
    this.video = this.videoRef?.nativeElement;
  }

  playVideo() {
    if (this.video != undefined) {
      this.video.muted = true;
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
}
