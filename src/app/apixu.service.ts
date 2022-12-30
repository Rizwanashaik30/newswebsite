import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http:HttpClient) { }
  // url="http://api.weatherstack.com/current?access_key=54c38753f238ae61e65f45a4f42ea53a&query=india";

  // weatherApiurl="https://api.apixu.com/v1/current.json?key=54c38753f238ae61e65f45a4f42ea53a&q=india";
  //  weatherApiurl="https://api.apixu.com/v1/current.json?key=54c38753f238ae61e65f45a4f42ea53a&q=india";


  sendToAPIXU(){
     return this.http.get('https://api.weatherstack.com/current?access_key=54c38753f238ae61e65f45a4f42ea53a&query=india' + location);
    

     
     }
}
  


// function getWeather(location: Location) {
//   throw new Error('Function not implemented.');
// }

// function getWeather(location: Location): void {
  // throw new Error('Function not implemented.');

//    }
  
// function getweather() {
//   throw new Error('Function not implemented.');


