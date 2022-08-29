import { TestBed } from '@angular/core/testing';

import { BrincosService } from './brincos.service';

describe('BrincosService', () => {
  let service: BrincosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrincosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
