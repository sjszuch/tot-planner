import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCardComponent } from './lead-card.component';

describe('LeadCardComponent', () => {
  let component: LeadCardComponent;
  let fixture: ComponentFixture<LeadCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadCardComponent]
    });
    fixture = TestBed.createComponent(LeadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
