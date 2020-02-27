import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendyDesignComponent } from './trendy-design.component';

describe('TrendyDesignComponent', () => {
  let component: TrendyDesignComponent;
  let fixture: ComponentFixture<TrendyDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendyDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendyDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
