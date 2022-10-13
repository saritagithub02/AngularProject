import { TestBed } from '@angular/core/testing';

import { GuardChildService } from './guard-child.service';

describe('GuardChildService', () => {
  let service: GuardChildService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardChildService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
