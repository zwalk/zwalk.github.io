import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTileComponent } from './work-tile.component';

describe('WorkTileComponent', () => {
  let component: WorkTileComponent;
  let fixture: ComponentFixture<WorkTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkTileComponent]
    });
    fixture = TestBed.createComponent(WorkTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
