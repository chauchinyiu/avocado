import { Component, OnInit } from '@angular/core';
import { WeatherUnsplashService } from 'src/app/services/weather-unsplash.service';
import { WeatherData, ImageData } from 'src/app/models/WeatherUnsplashData';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NavbarInputService } from 'src/app/services/navbar-input.service';
import { Masonry, MasonryGridItem } from 'ng-masonry-grid';  
 
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
  
  _masonry: Masonry;
  masonryItems: Array<any> = [];

  constructor(private weatherUnsplashService: WeatherUnsplashService, private navbarInputService: NavbarInputService) {
  }
  // Get ng masonry grid instance first

  onNgMasonryInit($event: Masonry) {
    console.log($event);
    this._masonry = $event;
  }

    // Get ng masonry grid instance first
    layoutComplete($event: Masonry) {
      this._masonry = $event;
    }
      // Get ng masonry grid instance first
      removeGridItem($event) {
    this._masonry = $event;
  }

  ngOnInit() {
   
       this.fetchWeatherUnsplash(this.city);
      this.navbarInputService.inputSubmitEvent.subscribe(value => {
        this.city = value;
       this.fetchWeatherUnsplash(this.city);
       this._masonry.reloadItems;
      });
    
  }
   
  fetchWeatherUnsplash(city:string) {
    if (this.masonryItems  &&  this.masonryItems.length>0){
        for(let i=0; i< this.masonryItems.length ; i++){
          //delete this.masonryItems[i];
        }
      //  this.masonryItems = [];
       console.dir('clean ?', this.masonryItems);
    }
    
    this.city = city;
    this.weatherUnsplashService.fetchWeatherUnsplash(this.city,'regular',5).subscribe(
      value =>{
       this.weatherData = value;
       console.dir('weather :: ',this.weatherData);
       this.images = value.images;

       for (let i = 0; i < this.images.length ; i++) {
        this.masonryItems.push({ src: this.images[i].url});
        }
       
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
 
  
  removeAllItems() {
    if (this._masonry) {
    //   this._removeAllSubscription = this._masonry.removeAllItems()
    //     .subscribe( (items: MasonryGridItem) => {
    //        // remove item from the list
    //        this.masonryItems = [];
    //     });
    // }
    }
  }
}
 