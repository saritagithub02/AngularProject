import { TestBed } from '@angular/core/testing';

import { DeActivateGuardService } from './de-activate-guard.service';

describe('DeActivateGuardService', () => {
  let service: DeActivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeActivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
