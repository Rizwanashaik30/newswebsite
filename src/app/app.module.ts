import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allAppRoutes } from './weather/routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from  '@angular/common/http';
import { NewsapiservicesService } from './services/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BussinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
// import { WeatherComponent } from './weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { ApixuService } from './apixu.service';

import { SoumyaComponent } from './soumya/soumya.component';
import { TeamComponent } from './team/team.component';
import { FormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BussinessnewsComponent,
    EntertainmentComponent,
    HealthComponent,
    SportsComponent,
    WeatherComponent,

    SoumyaComponent,
    TeamComponent,

 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    LoadingBarHttpClientModule ,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot(allAppRoutes)
    // WeatherComponent
    
    
    

  ],
  providers: [NewsapiservicesService,ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
