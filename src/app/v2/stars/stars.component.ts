import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { interval, Subscription } from 'rxjs';
import { MotionService } from 'src/app/motion.service';


// if you're reading this... just a forewarning I'm not totally in love with this code, there's duplication that I think I could get rid of, for sure

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
  animations: [
    // duplication here is a necessary evil as to not have the animation.done in the template trigger unintentional layers
    trigger("fadeInSmall", [
      state('true', style({ opacity: 1})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeOutSmall", [
      state('true', style({ opacity: 0})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeInMedium", [
      state('true', style({ opacity: 1})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeOutMedium", [
      state('true', style({ opacity: 0})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeInLarge", [
      state('true', style({ opacity: 1})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeOutLarge", [
      state('true', style({ opacity: 0})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    // second layer of star triggers, don't judge me 0_0
    trigger("fadeInSmall2", [
      state('true', style({ opacity: 1})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeOutSmall2", [
      state('true', style({ opacity: 0})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeInMedium2", [
      state('true', style({ opacity: 1})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeOutMedium2", [
      state('true', style({ opacity: 0})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeInLarge2", [
      state('true', style({ opacity: 1})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ]),
    trigger("fadeOutLarge2", [
      state('true', style({ opacity: 0})),
      state('false', style({})),
      transition("0=>1", animate(500))
    ])
  ]
})
export class StarsComponent {
  @ViewChild('smallStars') smallStars : ElementRef<HTMLDivElement> | undefined;
  @ViewChild('mediumStars') mediumStars : ElementRef<HTMLDivElement> | undefined;
  @ViewChild('largeStars') largeStars : ElementRef<HTMLDivElement> | undefined;
  @ViewChild('smallStars2') smallStars2 : ElementRef<HTMLDivElement> | undefined;
  @ViewChild('mediumStars2') mediumStars2 : ElementRef<HTMLDivElement> | undefined;
  @ViewChild('largeStars2') largeStars2 : ElementRef<HTMLDivElement> | undefined;
  smallStarsDiv : HTMLDivElement | undefined;
  mediumStarsDiv : HTMLDivElement | undefined;
  largeStarsDiv : HTMLDivElement | undefined;
  smallStarsDiv2 : HTMLDivElement | undefined;
  mediumStarsDiv2 : HTMLDivElement | undefined;
  largeStarsDiv2 : HTMLDivElement | undefined;

  windowWidth : number = 0;
  windowHeight : number = 0;
  
  shouldFadeInSmall = false;
  shouldFadeOutSmall = true;
  shouldFadeInMedium = false;
  shouldFadeOutMedium = true;
  shouldFadeInLarge = false;
  shouldFadeOutLarge = true;
  //layer 2 variables
  shouldFadeInSmall2 = false;
  shouldFadeOutSmall2 = true;
  shouldFadeInMedium2 = false;
  shouldFadeOutMedium2 = true;
  shouldFadeInLarge2 = false;
  shouldFadeOutLarge2 = true;
  // constants
  SMALL_STAR_COUNT = 700;
  MEDIUM_STAR_COUNT = 200;
  LARGE_STAR_COUNT = 100;
  LAYER_COUNT = 2;
  // end constants

  // timers
  smallSource = interval(5033);
  mediumSource = interval(6024);
  largeSource = interval(7086);
  smallSubscription : Subscription | undefined;
  mediumSubscription : Subscription | undefined;
  largeSubscription : Subscription | undefined;
  // layer 2
  smallSource2 = interval(2955);
  mediumSource2 = interval(3359);
  largeSource2 = interval(4567);
  smallSubscription2 : Subscription | undefined;
  mediumSubscription2 : Subscription | undefined;
  largeSubscription2 : Subscription | undefined;
  // end timers

  constructor(private motionService : MotionService) {}


  ngOnInit() {
    this.subscribeAll();
    this.getWindowSize(false);
    this.motionService.stopOrStart$.subscribe(stopMotion => {
      if (stopMotion) {
        this.unsubscribeAll();
      } else {
        this.subscribeAll();
      }
    })
  }
  
  ngAfterViewInit() {
    this.createStars();
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }

  subscribeAll() {
    this.smallSubscription = this.smallSource.subscribe(() => this.fadeOutStars('small'));
    this.mediumSubscription = this.mediumSource.subscribe(() => this.fadeOutStars('medium'));
    this.largeSubscription = this.largeSource.subscribe(() => this.fadeOutStars('large'));
    this.smallSubscription2 = this.smallSource2.subscribe(() => this.fadeOutStars('small2'));
    this.mediumSubscription2 = this.mediumSource2.subscribe(() => this.fadeOutStars('medium2'));
    this.largeSubscription2 = this.largeSource2.subscribe(() => this.fadeOutStars('large2'));
  }

  unsubscribeAll() {
    if (this.smallSubscription) this.smallSubscription.unsubscribe();
    if (this.mediumSubscription) this.mediumSubscription.unsubscribe();
    if (this.largeSubscription) this.largeSubscription.unsubscribe();
    if (this.smallSubscription2) this.smallSubscription2.unsubscribe();
    if (this.mediumSubscription2) this.mediumSubscription2.unsubscribe();
    if (this.largeSubscription2) this.largeSubscription2.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  getWindowSize(shouldCreate: boolean = true) {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    if (shouldCreate) { 
      this.createStars();
    }
  }

  createStars() {
    this.setAllDivs();

    [
      {div: this.smallStarsDiv, starCount: this.SMALL_STAR_COUNT/this.LAYER_COUNT},
      {div: this.mediumStarsDiv, starCount: this.MEDIUM_STAR_COUNT/this.LAYER_COUNT},
      {div: this.largeStarsDiv, starCount: this.LARGE_STAR_COUNT/this.LAYER_COUNT},
      {div: this.smallStarsDiv2, starCount: this.SMALL_STAR_COUNT/this.LAYER_COUNT},
      {div: this.mediumStarsDiv2, starCount: this.MEDIUM_STAR_COUNT/this.LAYER_COUNT},
      {div: this.largeStarsDiv2, starCount: this.LARGE_STAR_COUNT/this.LAYER_COUNT}
    ].forEach(starObj => {
      this.generateStarsFor(starObj.div, starObj.starCount)
    })
  }

  setAllDivs() {
    this.smallStarsDiv = this.smallStars?.nativeElement;
    this.mediumStarsDiv = this.mediumStars?.nativeElement;
    this.largeStarsDiv = this.largeStars?.nativeElement;
    this.smallStarsDiv2 = this.smallStars2?.nativeElement;
    this.mediumStarsDiv2 = this.mediumStars2?.nativeElement;
    this.largeStarsDiv2 = this.largeStars2?.nativeElement;
  }

  fadeInStars(layer : string) {
    switch(layer) {
      case 'small': {
        this.generateStarsFor(this.smallStarsDiv, this.SMALL_STAR_COUNT/this.LAYER_COUNT);
        this.shouldFadeInSmall = true;
        this.shouldFadeOutSmall = false;
        break;
      }
      case 'medium': {
        this.generateStarsFor(this.mediumStarsDiv, this.MEDIUM_STAR_COUNT/this.LAYER_COUNT)
        this.shouldFadeInMedium = true;
        this.shouldFadeOutMedium = false;
        break;
      }
      case 'large': {
        this.generateStarsFor(this.largeStarsDiv, this.LARGE_STAR_COUNT/this.LAYER_COUNT);
        this.shouldFadeInLarge = true;
        this.shouldFadeOutLarge = false;
        break;
      }
      case 'small2': {
        this.generateStarsFor(this.smallStarsDiv2, this.SMALL_STAR_COUNT/this.LAYER_COUNT);
        this.shouldFadeInSmall2 = true;
        this.shouldFadeOutSmall2 = false;
        break;
      }
      case 'medium2': {
        this.generateStarsFor(this.mediumStarsDiv2, this.MEDIUM_STAR_COUNT/this.LAYER_COUNT)
        this.shouldFadeInMedium2 = true;
        this.shouldFadeOutMedium2 = false;
        break;
      }
      case 'large2': {
        this.generateStarsFor(this.largeStarsDiv2, this.LARGE_STAR_COUNT/this.LAYER_COUNT);
        this.shouldFadeInLarge2 = true;
        this.shouldFadeOutLarge2 = false;
        break
      }
    }
    
  }

  fadeOutStars(layer : string) {
    switch(layer) {
      case 'small': {
        this.shouldFadeInSmall = false;
        this.shouldFadeOutSmall = true;
        break;
      }
      case 'medium': {
        this.shouldFadeInMedium = false;
        this.shouldFadeOutMedium = true;
        break;
      }
      case 'large': {
        this.shouldFadeInLarge= false;
        this.shouldFadeOutLarge = true;
        break;
      }
      case 'small2': {
        this.shouldFadeInSmall = false;
        this.shouldFadeOutSmall = true;
        break;
      }
      case 'medium2': {
        this.shouldFadeInMedium = false;
        this.shouldFadeOutMedium = true;
        break;
      }
      case 'large2': {
        this.shouldFadeInLarge= false;
        this.shouldFadeOutLarge = true;
        break;
      }
    }
  }

  generateStarsFor(element : HTMLDivElement | undefined, starCount : number) {
    if (element) element.style.boxShadow = this.generateRandomBoxShadow(starCount);
  }

  generateRandomBoxShadow(starCount : number) {
    const windowHeight = this.windowHeight;
    let boxShadow = `rgb(255,255,255) ${this.randomNumber(this.windowWidth)}px ${windowHeight}px,`;
    for (let i = 2; i <= starCount; i++) {
      if (i == starCount) {
        boxShadow += ` rgb(255,255,255) ${this.randomNumber(this.windowWidth)}px ${this.randomNumber(windowHeight)}px`;
      } else {
        boxShadow += ` rgb(255,255,255) ${this.randomNumber(this.windowWidth)}px ${this.randomNumber(windowHeight)}px,`;
      }
    }
    return boxShadow.toString()
  }

  randomNumber(upperLimit : number) {
    return Math.floor((Math.random() * upperLimit) + 1);
  }

}
