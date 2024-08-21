import { TestBed } from '@angular/core/testing';

import { GetAllGroupsService } from './get-all-groups.service';

describe('GetAllGroupsService', () => {
  let service: GetAllGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
