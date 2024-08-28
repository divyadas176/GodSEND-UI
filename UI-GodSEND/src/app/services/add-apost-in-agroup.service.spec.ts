import { TestBed } from '@angular/core/testing';

import { AddAPostInAGroupService } from './add-apost-in-agroup.service';

describe('AddAPostInAGroupService', () => {
  let service: AddAPostInAGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddAPostInAGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
