import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherUnsplashComponent } from './components/weather-unsplash/weather-unsplash.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JokeComponent } from './components/joke/joke.component';
import { QuotePipe } from './pipes/quote.pipe';
import { DegreeCelsiusPipe } from './pipes/degree-celsius.pipe';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { NavbarInputComponent } from './components/navbar-input/navbar-input.component';
 

@NgModule({
  declarations: [
    AppComponent,
    WeatherUnsplashComponent,
    JokeComponent,
    QuotePipe,
    DegreeCelsiusPipe,
    NavbarInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CrystalLightboxModule,
    NgMasonryGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
