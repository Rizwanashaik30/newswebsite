import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { RizComponent } from './riz/riz.component';
import { SoumyaComponent } from './soumya/soumya.component';


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
    RizComponent,
    SoumyaComponent
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule ,
    ReactiveFormsModule,
    // RouterModule.forRoot(allAppRoutes)
    // WeatherComponent
    
    
    

  ],
  providers: [NewsapiservicesService,ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
