import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesdevisComponent } from './mesdevis.component';

describe('MesdevisComponent', () => {
  let component: MesdevisComponent;
  let fixture: ComponentFixture<MesdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesdevisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
