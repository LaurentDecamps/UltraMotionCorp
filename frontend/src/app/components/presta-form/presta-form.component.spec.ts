import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestaFormComponent } from './presta-form.component';

describe('PrestaFormComponent', () => {
  let component: PrestaFormComponent;
  let fixture: ComponentFixture<PrestaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
