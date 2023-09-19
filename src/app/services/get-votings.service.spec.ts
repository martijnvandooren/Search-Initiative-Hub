import { TestBed } from '@angular/core/testing';

import { GetVotingsService } from './get-votings.service';

describe('GetVotingsService', () => {
  let service: GetVotingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVotingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
