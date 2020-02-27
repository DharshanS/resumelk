import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformBrownComponent } from './uniform-brown.component';

describe('UniformBrownComponent', () => {
  let component: UniformBrownComponent;
  let fixture: ComponentFixture<UniformBrownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniformBrownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniformBrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
