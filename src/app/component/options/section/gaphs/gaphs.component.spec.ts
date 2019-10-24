import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaphsComponent } from './gaphs.component';

describe('GaphsComponent', () => {
  let component: GaphsComponent;
  let fixture: ComponentFixture<GaphsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaphsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
