import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaliforniSmallComponent } from './californi-small.component';

describe('CaliforniSmallComponent', () => {
  let component: CaliforniSmallComponent;
  let fixture: ComponentFixture<CaliforniSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaliforniSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaliforniSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
