import { TestBed } from '@angular/core/testing';

import { ReloadActivityService } from './reload-activity.service';

describe('ReloadActivityService', () => {
  let service: ReloadActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
