import { TestBed } from '@angular/core/testing';

import { FlickerServiceService } from './flicker-service.service';

describe('FlickerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickerServiceService = TestBed.get(FlickerServiceService);
    expect(service).toBeTruthy();
  });
});
