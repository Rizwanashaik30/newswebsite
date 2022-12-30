import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApixuService } from '../apixu.service';

// import{NewsapiservicesService} from '../services/newsapiservices.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent  implements OnInit{

  //  weatherSearchForm:FormGroup;
  //   weatherData: any;
  // apixuService: any;
  // weatherSearchForm: any;
  constructor(private formBuilder: FormBuilder,
    private service: ApixuService
  
    ){}
    weatherData: any;
    apixuService: any;
    weatherSearchForm: any;  
    
  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
   

  }
    
    sendToAPIXU(formValues: any){
    
      this.apixuService.getWeather(formValues.location).subscribe((data: any)=>{
        this.weatherData=data;
        console.log(this.weatherData);
      })
      // 
      
    }
    }
 
    
     
 


  // formBuilder: any;
  // apixuService: any;
  // weatherData: any;
  
  // NewsapiservicesService: any;
  

  // formBuilder: any;
  // constructor(private formBuilder: FormBuilder){
   
    
    

 
    // ngOnInit() {
    //   this.weatherSearchForm = this.formBuilder.group({
    //     location: [""]
    //   });
  //   }
  
//   sendToAPIXU(formValues:any) {
    
//     this. ApixuService
//       .getWeather(formValues.location)
//       .subscribe((data: any) => this.weatherData = data);
//       console.log(formValues);
  
//    }

// };

    
  


   
  



  // function sendToAPIXU(formValues: any) {
  //   throw new Error('Function not implemented.');
  

