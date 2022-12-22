import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss']
})
export class TopheadingComponent  implements OnInit{

constructor(private service:NewsapiservicesService){ }

  topheadingDisplay:any=[];

  ngOnInit(): void {
    
  this.service.topHeading().subscribe((result)=>{
  

    this.topheadingDisplay = result.articles;

  })
}
}
  

