import { Component, OnInit } from '@angular/core';
import { WeatherUnsplashService } from 'src/app/services/weather-unsplash.service';
import { WeatherData } from 'src/app/models/WeatherUnsplashData';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-weather-unsplash',
  templateUrl: './weather-unsplash.component.html',
  styleUrls: ['./weather-unsplash.component.scss'],
  providers: [NgbCarouselConfig] 
})
export class WeatherUnsplashComponent implements OnInit {
  weatherData:WeatherData;
  images:Array<ImageData>;
  currentImage:ImageData;
  constructor(private weatherUnsplashService: WeatherUnsplashService) {

   }
  
  ngOnInit() {
    this.fetchWeatherUnsplash();
  }
  fetchWeatherUnsplash() {
    this.weatherUnsplashService.fetchWeatherUnsplash('munich','regular','landscape',200).subscribe(
      value =>{
      this.weatherData = value;
      this.images = value.images;
      this.currentImage = this.images[this.generateRandomInteger(0,this.images.length - 1)];
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
