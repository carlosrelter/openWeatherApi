import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { TopBarComponent } from './top-bar/top-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherService } from './weather.service';
import { locationReducer } from './location-reducer';


@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastComponent,
    HomePageComponent,
    TopBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    StoreModule.forRoot({
      loc: locationReducer
    })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
