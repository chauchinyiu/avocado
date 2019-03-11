import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { WeatherData, ImageData} from '../models/WeatherUnsplashData';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class WeatherUnsplashService {

  //private weatherUnsplashApiUrl = 'http://weather-unsplash.herokuapp.com/weather/munich/photo/regular';

  constructor(private httpClient: HttpClient) { }

  weatherUnsplashApiUrl(city,size){
     return 'http://weather-unsplash.herokuapp.com/weather/'+city+'/photo/'+size;
  }
  fetchWeatherUnsplash(city,size):Observable<WeatherData> {
    return this.httpClient.get(this.weatherUnsplashApiUrl(city,size))
      .pipe(
        tap(data => console.dir(data)),
        map(data => <WeatherData>data)
      );
  }
}
