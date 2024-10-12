import { TestBed } from '@angular/core/testing';

import { JoinAGroupService } from './join-agroup.service';

describe('JoinAGroupService', () => {
  let service: JoinAGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoinAGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
