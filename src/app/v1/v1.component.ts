import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.css']
})
export class V1Component {

  constructor(private router : Router) {}

  ngAfterViewInit() {

    // NOT ANGULAR BEST PRACTICE - preserving original version

    //add event listener to make sure the DOM loads first.
    document.addEventListener('DOMContentLoaded', () => {

      /**
      * Below finds nav bar anchor elements and turns them black if you have scrolled to the projects page
      */
      document.addEventListener('scroll', () => {
        if (this.router.url.includes('v1')) {
          if (document.body.scrollTop + 52.5 >= (document.getElementById('projects')?.offsetTop ?? 0)
            || document.documentElement.scrollTop + 52.5 >= (document.getElementById('projects')?.offsetTop ?? 0)) {
            document.querySelectorAll('li a').forEach((a) => {
              a.classList.add('black');
            });
            const zachLogoElem: HTMLImageElement | null = document.getElementById('zach-logo') as HTMLImageElement;
            zachLogoElem.src = "assets/v1/img/zachlogo-black.png";
            document.querySelector('.nav-container')?.classList.add('white-background');
            document.querySelector('.logo-container')?.classList.add('scaled-logo');
          } else {
            document.querySelectorAll('li a').forEach((a) => {
              a.classList.remove('black');
            });
            const zachLogoElem: HTMLImageElement | null = document.getElementById('zach-logo') as HTMLImageElement;
            zachLogoElem.src = "assets/v1/img/zachlogo.png";
            document.querySelector('.nav-container')?.classList.remove('white-background');
            document.querySelector('.logo-container')?.classList.remove('scaled-logo');
          }
        }
      });
    })
  }
}
