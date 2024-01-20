import { Component } from '@angular/core';
import { Tiles } from '../constants/Tiles';
import { DateTime } from 'luxon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


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
  isPhone : boolean = false;
  message : string = `
  Hi, I'm Zach. I love to write code! I am based in the Columbus, Ohio area with my wife, our Basset Hound, and our cat. I have experience in 
  multiple industries building and maintaining enterprise code. Prior to 2019, My career path was in sales, but I found myself wanting to 
  pursue my passion for software. I went through the Tech Elevator coding bootcamp program and never looked back! I am beyond grateful 
  for the opportunity I have had since then and the great people I have been able to meet and work with. My interests
  outside of programming are traveling with my wife, good coffee, bourbon and rye whiskey, gaming, learning the guitar and unfortunately I'm a loyal fan of the Cleveland Browns. Thanks for stopping by!
  `

  constructor(private observer : BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {
        if (result.matches) {
          this.isPhone = true;
          this.message = `
          Hi, I'm Zach. I love to code! I am based in the Columbus, Ohio area with my wife, our Basset Hound, and our cat. I have experience in 
          multiple industries building and maintaining enterprise code. Thanks for stopping by!
          `
        }
      })
  }

  getCSSPrefix(name : string) {
    let prefix : string = '';
    if (this.isPhone) {
      prefix = 'phone-'
    }
    return prefix + name;
  }

  getYears() : number | undefined {
    const now = DateTime.now();
    const years = now.diff(DateTime.fromISO('2019-05-01'), 'years').toObject()['years'];
    return years != undefined ? Math.trunc(years) : undefined;
  }
}
