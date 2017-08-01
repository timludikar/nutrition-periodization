import { TestBed, inject } from '@angular/core/testing';

import { CaloriesService } from './calories.service';

describe('CaloriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaloriesService]
    });
  });

  it('should be created', inject([CaloriesService], (service: CaloriesService) => {
    expect(service).toBeTruthy();
  }));
});
