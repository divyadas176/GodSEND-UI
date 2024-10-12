import { TestBed } from '@angular/core/testing';

import { GetAllGroupsForAUserService } from './get-all-groups-for-auser.service';

describe('GetAllGroupsForAUserService', () => {
  let service: GetAllGroupsForAUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllGroupsForAUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
