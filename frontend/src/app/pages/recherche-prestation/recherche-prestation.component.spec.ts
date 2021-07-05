import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePrestationComponent } from './recherche-prestation.component';

describe('RecherchePrestationComponent', () => {
  let component: RecherchePrestationComponent;
  let fixture: ComponentFixture<RecherchePrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchePrestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
