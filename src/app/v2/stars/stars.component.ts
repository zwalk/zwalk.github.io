import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {
  @ViewChild('stars') stars : ElementRef<HTMLDivElement> | undefined;
  @ViewChild('stars2') stars2 : ElementRef<HTMLDivElement> | undefined;
  @ViewChild('stars3') stars3 : ElementRef<HTMLDivElement> | undefined;
  starsDiv : HTMLDivElement | undefined;
  stars2Div : HTMLDivElement | undefined;
  stars3Div : HTMLDivElement | undefined;
  
  ngAfterViewInit() {
    this.starsDiv = this.stars?.nativeElement;
    if (this.starsDiv != undefined) {
      this.starsDiv.style.boxShadow = this.generateRandomBoxShadow(700);
    } 
    this.stars2Div = this.stars2?.nativeElement;
    if (this.stars2Div) this.stars2Div.style.boxShadow = this.generateRandomBoxShadow(200);
    this.stars3Div = this.stars3?.nativeElement;
    if (this.stars3Div) this.stars3Div.style.boxShadow = this.generateRandomBoxShadow(100);
  }

  generateRandomBoxShadow(starCount : number) {
    let boxShadow = `${this.randomNumber(2000)}px ${this.randomNumber(2000)}px #FFF,`;
    for (let i = 2; i <= starCount; i++) {
      if (i == starCount) {
        boxShadow += ` ${this.randomNumber(2000)}px ${this.randomNumber(2000)}px #FFF`;
      } else {
        boxShadow += ` ${this.randomNumber(2000)}px ${this.randomNumber(2000)}px #FFF,`;
      }
    }
    return boxShadow.toString();
  }

  randomNumber(upperLimit : number) {
    return Math.floor((Math.random() * upperLimit) + 1);
  }

}
