import { animate, state, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { cloudAnimation } from '../animations';
import { MotionService } from 'src/app/motion.service';

type CloudState = {
  [key: string]: string
}

type CloudFirstRun = {
  [key: string]: boolean
}

@Component({
  selector: 'app-clouds',
  standalone: false,
  templateUrl: './clouds.component.html',
  styleUrl: './clouds.component.css',
  animations: [
    trigger('moveClouds', [
      state('move', style({
        transform: 'scale({{scale}}) translateX({{end}})',
        opacity: '1'
      },), { params: {
        scale: '',
        end: ''
      }}),
      state('invisible', style({
        opacity: '0'
      })),
      state('visible', style({
        opacity: '1'
      })),
      state('reset', style({
        transform: 'scale({{scale}}) translateX({{start}})',
      }), { params: {
        scale: '',
        start: ''
      }}),
      state('hideForRest', style({
        transform: 'scale({{scale}}) translateX(0%)',
        opacity: '0'
      }), { params: {
        scale: ''
      }}),
      state('moveToRest', style({
        transform: 'scale({{scale}}) translateX({{rest}})',
        opacity: '0'
      }), { params: {
        scale: '',
        rest: ''
      }}),
      state('showAtRest', style({
        transform: 'scale({{scale}}) translateX({{rest}})',
        opacity: '1'
      }), { params: {
        scale: '',
        rest: ''
      }}),
      transition('* => move', animate('{{travelTime}}'), { params: {
        travelTime: ''
      }}),
      transition('* => invisible', animate('0.1s')),
      transition('* => visible', animate('0.1s')),
      transition('* => reset', animate('0.1s')),
      transition('* => hideForRest', animate('2s')),
      transition('* => moveToRest', animate('0.1s')),
      transition('* => showAtRest', animate('1s')),
    ])
  ]
})
export class CloudsComponent {
  cloudStates : CloudState = {
    'cloud1': '',
    'cloud2': '',
    'cloud3': '',
    'cloud4': '',
    'cloud5': ''
  }

  cloudFirstRun : CloudFirstRun = {
    'cloud1': false,
    'cloud2': false,
    'cloud3': false,
    'cloud4': false,
    'cloud5': false
  }


  constructor(private motionService : MotionService) {}

  ngOnInit() {
    this.motionService.stopOrStart$.subscribe(stopMotion => {
      if (stopMotion) {
        this.handleStopMotion();
      } else {
        this.handleStartMotion();
      }
    })
  }

  ngAfterViewInit() {
    this.handleStartMotion();
  }

  handleStartMotion() {
    for (const key in this.cloudStates) {
      this.cloudStates[key] = 'move';
    }
  }

  handleStopMotion() {
    for (const key in this.cloudStates) {
      this.cloudStates[key] = 'hideForRest';
    }
  }

  handleReset(name : string) {
    if (this.cloudStates[name] == 'move') {
      this.cloudStates[name] = 'invisible';
    } else if (this.cloudStates[name] == 'invisible') {
      if (localStorage.getItem('stopMotion') == 'true') {
        this.cloudStates[name] = 'moveToRest'
      } else {
        this.cloudStates[name] = 'reset'
      }
    } else if (this.cloudStates[name] == 'reset') {
      this.cloudStates[name] = 'visible';
    } else if (this.cloudStates[name] == 'visible') {
      this.cloudStates[name] = 'move';
    } else if (this.cloudStates[name] == 'hideForRest') {
      this.cloudStates[name] = 'moveToRest'
    } else if (this.cloudStates[name] == 'moveToRest') {
      this.cloudStates[name] = 'showAtRest'
    }
  }

}
