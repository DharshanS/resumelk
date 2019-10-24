import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferancesComponent } from './referances.component';

describe('ReferancesComponent', () => {
  let component: ReferancesComponent;
  let fixture: ComponentFixture<ReferancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
