import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApixuService {
 
  

  constructor(private http:HttpClient) {

   
  }
  getWeather(location: string):Observable<any>
  {
   
    // return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid={a9175606eec7a49f1ed50db7b4c2ada2}'+ location);
    // return this.http.get('http://api.openweathermap.org/data/2.5/weather?q={hyderabad}&appid={a9175606eec7a49f1ed50db7b4c2ada2}' + location);
    // return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={a9175606eec7a49f1ed50db7b4c2ada2}'+location);
    return this.http.get(`http://api.weatherapi.com/v1/current.json?key=83a6706680694837a6f55729230401&q=${location}&aqi=yes`);
    //  return this.http.get('https://api.openweathermap.org/data/2.5/weather?q={city_name},{+91}&appid={07deb325d6606dde155787be6e578ce7}'+location)
  

  // return this.http.get('http://api.weatherstack.com/current?access_key=54c38753f238ae61e65f45a4f42ea53a&query=india,london'+location);
  //  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q={india}&appid={a9175606eec7a49f1ed50db7b4c2ada2}' + location);
  

  //  return this.http.get('https://api.apixu.com/v1/current.json?key=54c38753f238ae61e65f45a4f42ea53a&query=india'+ location);
  //  weatherApiurl="https://api.apixu.com/v1/current.json?key=54c38753f238ae61e65f45a4f42ea53a&q=india";
  // http://api.weatherapi.com/v1/forecast.json?key=83a6706680694837a6f55729230401&q=india&days=7&aqi=yes&alerts=yes'


    //  return this.http.get('http://api.weatherapi.com/v1/forecast.json?key=83a6706680694837a6f55729230401&q=telangana&days=1&aqi=yes&alerts=yes' + location);
    

     
  //    }
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


