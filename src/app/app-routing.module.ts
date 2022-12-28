import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessnewsComponent } from './businessnews/businessnews.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'bussiness',component:BussinessnewsComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'health',component:HealthComponent},
  {path:'sports',component:SportsComponent},
  {path:'weather',component:WeatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
