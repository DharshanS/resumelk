import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HawkingComponent } from './hawking.component';

describe('HawkingComponent', () => {
  let component: HawkingComponent;
  let fixture: ComponentFixture<HawkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HawkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HawkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
