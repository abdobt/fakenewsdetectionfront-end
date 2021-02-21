import { TestBed } from '@angular/core/testing';

import { SentimentserviceService } from './sentimentservice.service';

describe('SentimentserviceService', () => {
  let service: SentimentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentimentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
