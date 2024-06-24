import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotionService {
  stopMotion : boolean = this.getStopMotionValue();
  stopOrStartMotion = new Subject<boolean>();
  stopOrStart$ = this.stopOrStartMotion.asObservable();

  constructor() { }

  setStopMotion(stop : boolean) {
    if (localStorage.getItem('stopMotion') != stop.toString()) {
      localStorage.setItem('stopMotion', stop.toString());
      this.stopMotion = stop;
      this.stopOrStartMotion.next(this.stopMotion);
    }
  }

  getStopMotionValue() {
    if (localStorage.getItem('stopMotion') == 'true') {
      return true;
    } else {
      return false;
    }
  }
}
