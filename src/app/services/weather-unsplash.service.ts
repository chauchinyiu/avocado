import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { WeatherData, ImageData} from '../models/WeatherUnsplashData';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
 
export class WeatherUnsplashService {


  constructor(private httpClient: HttpClient) { }

   url:string = 'http://weather-unsplash.herokuapp.com';
  
  fetchWeatherUnsplash(city,size,num_imgs):Observable<WeatherData> {
    var params = {
      'city': city,
      'size': size,
    
      'num_imgs': num_imgs   
    };
   

    return this.httpClient.get(this.url,{'params':params})
      .pipe(
        tap(data => console.dir(data)),
        map(data => <WeatherData>data)
      );
  }
}
