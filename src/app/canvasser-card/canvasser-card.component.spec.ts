import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasserCardComponent } from './canvasser-card.component';

describe('CanvasserCardComponent', () => {
  let component: CanvasserCardComponent;
  let fixture: ComponentFixture<CanvasserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasserCardComponent]
    });
    fixture = TestBed.createComponent(CanvasserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
