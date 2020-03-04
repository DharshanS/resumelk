import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedNavyComponent } from './boxed-navy.component';

describe('BoxedNavyComponent', () => {
  let component: BoxedNavyComponent;
  let fixture: ComponentFixture<BoxedNavyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxedNavyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxedNavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
