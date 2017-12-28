import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmCalendarComponent } from './pm-calendar.component';

describe('PmCalendarComponent', () => {
  let component: PmCalendarComponent;
  let fixture: ComponentFixture<PmCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
