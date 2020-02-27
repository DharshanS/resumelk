import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalBlueComponent } from './royal-blue.component';

describe('RoyalBlueComponent', () => {
  let component: RoyalBlueComponent;
  let fixture: ComponentFixture<RoyalBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoyalBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
