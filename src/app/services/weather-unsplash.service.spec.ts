import { TestBed } from '@angular/core/testing';

import { WeatherUnsplashService } from './weather-unsplash.service';

describe('WeatherUnsplashService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherUnsplashService = TestBed.get(WeatherUnsplashService);
    expect(service).toBeTruthy();
  });
});
