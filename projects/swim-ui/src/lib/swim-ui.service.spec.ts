import { TestBed } from '@angular/core/testing';

import { SwimUiService } from './swim-ui.service';

describe('SwimUiService', () => {
  let service: SwimUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwimUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
