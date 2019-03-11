import { Component, OnInit } from '@angular/core';
import { WeatherUnsplashService } from 'src/app/services/weather-unsplash.service';
import { WeatherData } from 'src/app/models/WeatherUnsplashData';

@Component({
  selector: 'app-weather-unsplash',
  templateUrl: './weather-unsplash.component.html',
  styleUrls: ['./weather-unsplash.component.scss']
})
export class WeatherUnsplashComponent implements OnInit {
  weatherData:WeatherData;
  images:Array<ImageData>;
  currentImage:ImageData;
  constructor(private weatherUnsplashService: WeatherUnsplashService) { }
 
  ngOnInit() {
  }
  fetchWeatherUnsplash() {
    this.weatherUnsplashService.fetchWeatherUnsplash('munich','regular').subscribe(
      value =>{
      this.weatherData = value;
      this.images = value.images;
      this.currentImage = this.images[this.generateRandomInteger(0,9)];
      console.log(this.weatherData);
      console.log(this.images);
       },
    error => {console.log(error);}
    )
  }

   generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }
}
