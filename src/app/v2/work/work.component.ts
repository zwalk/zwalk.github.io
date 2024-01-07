import { Component, ElementRef } from '@angular/core';
import { Tiles } from '../constants/Tiles';

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
  workTiles = [{
      img: "assets/v2/img/cmm2.png",
      roles: [{ jobTitle: "Software Engineer"} as Role],
      dates: "June 2021 - Present",
      url: "https://www.covermymeds.com/main/about",
      overlayText: "Click To Visit CoverMyMeds' website"
    },
    {
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
      img: "assets/v2/img/wedding3.png",
      roles: [
        {jobTitle: "Wedding site"} as Role
      ],
      dates: "Designed and Developed in 2021",
      url: 'https://www.chrisandmiranda.com/',
      overlayText: "Click to Visit the Wedding website"
    }
  ]

  goToResume() : void {
    window.location.href = 'assets/v2/files/ZachWalker_resume.pdf';
  }
}
