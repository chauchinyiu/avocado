import { Component, OnInit } from '@angular/core';
import { WeatherUnsplashService } from '../../services/weather-unsplash.service';
import { WeatherData, ImageData } from '../../models/WeatherUnsplashData';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { NavbarInputService } from '../../services/navbar-input.service';
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
  city:string ='Munich';
  
  masonry: Masonry;
  masonryItems: Array<any> = [];

  constructor(private weatherUnsplashService: WeatherUnsplashService, private navbarInputService: NavbarInputService) {
  }
  // Get ng masonry grid instance first

  onNgMasonryInit($event: Masonry) {
    this.masonry = $event as Masonry;
  }

 
  ngOnInit() {
      this.reloadWeatherImages(this.city);
      this.navbarInputService.inputSubmitEvent.subscribe(value => {
       
        if (this.masonryItems  &&  this.masonryItems.length>0){
          this.renewWeatherImages(value);
        }else{
          this.reloadWeatherImages(value);  
        }
    
      });
    
  }
   
  reloadWeatherImages(city:string) {
    
    this.city = city;
    this.weatherUnsplashService.fetchWeatherUnsplash(this.city,'regular',30).subscribe(
      value =>{
       this.weatherData = value;
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
 
  
  // remove all items
  renewWeatherImages(city:string) {
    if (this.masonry) {
      
        this.masonry.removeAllItems()
         .subscribe( (items: MasonryGridItem) => {
        // remove item from the list
           this.masonryItems = [];
           this.reloadWeatherImages(city);
          console.dir("empty first !!!!! ");
        });
    }
  }
}
 