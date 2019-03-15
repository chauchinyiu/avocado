import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
 
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class JokeService {
 private url:string = 'http://api.icndb.com/jokes/random';
  
  constructor(private httpClient: HttpClient) { }

  fetchJoke():Observable<string> {
    return this.httpClient.get(this.url)
      .pipe(
        tap(data => console.dir(data)),
        map(data => data['value']['joke'])
      );
  }

  fetchJokeWithName(firstname, lastname):Observable<string> {
    let urlWithName: string = this.url.concat('?firstName='+firstname + '&lastName='+ lastname);
    console.log('url with paras', urlWithName);
    return this.httpClient.get(urlWithName)
      .pipe(
        tap(data => console.dir(data)),
        map(data => data['value']['joke'])
      );
  }
}
