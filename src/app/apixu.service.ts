import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http:HttpClient) { }

  // weatherApiurl="https://api.apixu.com/v1/current.json?key=54c38753f238ae61e65f45a4f42ea53a&q=india";


getWeather(location: string){
     return this.http.get( 
      'https://api.apixu.com/v1/current.json?key=54c38753f238ae61e65f45a4f42ea53a&q=' + location
);
     
     }
}
  


function getWeather(location: Location) {
  throw new Error('Function not implemented.');
}

// function getWeather(location: Location): void {
  // throw new Error('Function not implemented.');

//    }
  
// function getweather() {
//   throw new Error('Function not implemented.');


