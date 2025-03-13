import { TestBed } from '@angular/core/testing';

import { InspirationService } from './inspiration.service';

describe('InspirationService', () => {
  let service: InspirationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspirationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
