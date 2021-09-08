import { TestBed } from '@angular/core/testing';

import { AhadethService } from './ahadeth.service';

describe('AhadethService', () => {
  let service: AhadethService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhadethService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
