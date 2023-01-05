import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { ApixuService } from '../apixu.service';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent  implements OnInit{

  public weatherSearchForm!: FormGroup<any>;
  weatherData: any;
  // apixuService: any;
  constructor(private formBuilder: FormBuilder,
    private apixuService: ApixuService
  
    ){}
 
    // weatherSearchForm!: FormGroup<any>;
    
    
  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: [""]
    });
   

  }
    
    sendToAPIXU(formValues: any){
    
      this.apixuService.getWeather(formValues.location).subscribe((data: any)=>{
        this.weatherData=data});
        console.log(this.weatherData);
      }
      // 
      
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
  

