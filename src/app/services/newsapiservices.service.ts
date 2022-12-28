import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) { }

    newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=8fbda421aec949199a6b17b84f1dc778";

    techApiurl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8fbda421aec949199a6b17b84f1dc778";

    bussinessApiurl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8fbda421aec949199a6b17b84f1dc778";

    entertainmentApiurl="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8fbda421aec949199a6b17b84f1dc778";

    healthApiurl="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8fbda421aec949199a6b17b84f1dc778";
   
    sportsApiurl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8fbda421aec949199a6b17b84f1dc778";


    weatherApiurl="https://api.apixu.com/v1/current.json?key=54c38753f238ae61e65f45a4f42ea53a&q=india";

    topHeading():Observable<any>
    {
       return this.http.get(this.newsApiUrl);

    }
    techNews():Observable<any>
    {
      return this.http.get(this.techApiurl);
    }
    bussiness():Observable<any>
    {
      return this.http.get(this.bussinessApiurl);
    }
     entertainmentnews():Observable<any>
  {
     return this.http.get(this.entertainmentApiurl);
  }
   healthnews():Observable<any>
   {
    return this.http.get(this.healthApiurl);
   }
   sportnews():Observable<any>
   {
    return this.http.get(this.sportsApiurl);
   }
  //  getweather():Observable<any>{
  //    return this.http.get( 
  //     this.weatherApiurl + location);

     
  //  }


  }

