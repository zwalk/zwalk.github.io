import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotionService {
  stopMotion : boolean = false;
  stopOrStartMotion = new Subject<boolean>();
  stopOrStart$ = this.stopOrStartMotion.asObservable();

  constructor() { }

  switchMotion() {
    this.stopMotion = !this.stopMotion;
    this.stopOrStartMotion.next(this.stopMotion);
  }
}
