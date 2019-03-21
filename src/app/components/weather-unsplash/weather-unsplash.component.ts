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
  error:string;
  city:string ='munich';
  

  constructor(private weatherUnsplashService: WeatherUnsplashService) {
  }
  
  ngOnInit() {
    this.fetchWeatherUnsplash();
  }

  fetchWeatherUnsplash() {
    this.weatherUnsplashService.fetchWeatherUnsplash(this.city,'regular','landscape',6).subscribe(
      value =>{
       this.weatherData = value;
       console.dir('weather :: ',this.weatherData);
       this.images = value.images;
      },
    error => {console.log(error);}
    )
  }

  generateRandomInteger(min, max) {
      return Math.floor(min + Math.random()*(max + 1 - min))
  }

  onCityKey(event: string) {
    this.city = event;
   
  }
}
 