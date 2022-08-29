import { TestBed } from '@angular/core/testing';

import { ColaresService } from './colares.service';

describe('ColaresService', () => {
  let service: ColaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
