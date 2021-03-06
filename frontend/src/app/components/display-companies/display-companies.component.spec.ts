import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCompaniesComponent } from './display-companies.component';

describe('DisplayCompaniesComponent', () => {
  let component: DisplayCompaniesComponent;
  let fixture: ComponentFixture<DisplayCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCompaniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
