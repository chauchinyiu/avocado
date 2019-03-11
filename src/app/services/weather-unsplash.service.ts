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

   url:string = 'http://weather-unsplash.herokuapp.com';
  
  fetchWeatherUnsplash(city,size,orientation,num_imgs):Observable<WeatherData> {
    const params = {
      'city': city,
      'size': size,
      'orientation': orientation,
      'num_imgs': num_imgs   
    }

    return this.httpClient.get(this.url,{'params':params})
      .pipe(
        tap(data => console.dir(data)),
        map(data => <WeatherData>data)
      );
  }
}
