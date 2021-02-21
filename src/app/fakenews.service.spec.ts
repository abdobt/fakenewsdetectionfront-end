import { TestBed } from '@angular/core/testing';

import { FakenewsService } from './fakenews.service';

describe('FakenewsService', () => {
  let service: FakenewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakenewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
