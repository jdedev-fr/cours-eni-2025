import { TestBed } from '@angular/core/testing';

import { TestGuard2Guard } from './test-guard2.guard';

describe('TestGuard2Guard', () => {
  let guard: TestGuard2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestGuard2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
