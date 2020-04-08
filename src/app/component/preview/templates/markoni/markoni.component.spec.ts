import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkoniComponent } from './markoni.component';

describe('MarkoniComponent', () => {
  let component: MarkoniComponent;
  let fixture: ComponentFixture<MarkoniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkoniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
