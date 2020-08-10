import { TestBed } from '@angular/core/testing';

import { NgTickerTapeService } from './ng-ticker-tape.service';

describe('NgTickerTapeService', () => {
  let service: NgTickerTapeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTickerTapeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
