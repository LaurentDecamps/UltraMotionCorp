import { TestBed } from '@angular/core/testing';

import { ProfessionelService } from './professionel.service';

describe('ProfessionelService', () => {
  let service: ProfessionelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
