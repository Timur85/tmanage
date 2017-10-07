import { TestBed, inject } from '@angular/core/testing';

import { TmanageService } from './tmanage.service';

describe('TmanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TmanageService]
    });
  });

  it('should be created', inject([TmanageService], (service: TmanageService) => {
    expect(service).toBeTruthy();
  }));
});
