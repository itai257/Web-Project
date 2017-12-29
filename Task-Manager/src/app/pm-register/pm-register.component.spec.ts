import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmRegisterComponent } from './pm-register.component';

describe('PmRegisterComponent', () => {
  let component: PmRegisterComponent;
  let fixture: ComponentFixture<PmRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
