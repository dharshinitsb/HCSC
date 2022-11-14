import { TestBed } from '@angular/core/testing';

import { ScheduledFlightServiceService } from './scheduled-flight-service.service';

describe('ScheduledFlightServiceService', () => {
  let service: ScheduledFlightServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledFlightServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
