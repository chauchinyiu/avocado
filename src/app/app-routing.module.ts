import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherUnsplashComponent } from './components/weather-unsplash/weather-unsplash.component';
import { JokeComponent } from './components/joke/joke.component';
import { BrowserModule } from '@angular/platform-browser';

const appRoutes: Routes = [
  { path: 'weather', component: WeatherUnsplashComponent },
  { path: 'joke', component: JokeComponent },
  { path: '',   redirectTo: '/weather', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}