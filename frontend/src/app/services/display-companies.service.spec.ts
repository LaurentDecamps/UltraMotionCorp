import { TestBed } from '@angular/core/testing';

import { DisplayCompaniesService } from './display-companies.service';

describe('DisplayCompaniesService', () => {
  let service: DisplayCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
