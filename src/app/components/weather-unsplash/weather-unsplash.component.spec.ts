import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherUnsplashComponent } from './weather-unsplash.component';

describe('WeatherUnsplashComponent', () => {
  let component: WeatherUnsplashComponent;
  let fixture: ComponentFixture<WeatherUnsplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherUnsplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherUnsplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
