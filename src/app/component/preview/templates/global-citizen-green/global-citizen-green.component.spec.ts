import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCitizenGreenComponent } from './global-citizen-green.component';

describe('GlobalCitizenGreenComponent', () => {
  let component: GlobalCitizenGreenComponent;
  let fixture: ComponentFixture<GlobalCitizenGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCitizenGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCitizenGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
