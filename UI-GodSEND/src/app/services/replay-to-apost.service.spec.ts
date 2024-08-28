import { TestBed } from '@angular/core/testing';

import { ReplayToAPostService } from './replay-to-apost.service';

describe('ReplayToAPostService', () => {
  let service: ReplayToAPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplayToAPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
