import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavingModalComponent } from './leaving-modal.component';

describe('LeavingModalComponent', () => {
  let component: LeavingModalComponent;
  let fixture: ComponentFixture<LeavingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeavingModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeavingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
