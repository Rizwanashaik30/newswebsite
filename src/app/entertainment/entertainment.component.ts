import { Component, OnInit } from '@angular/core';
import{NewsapiservicesService} from '../services/newsapiservices.service'
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
   
  constructor(private service:NewsapiservicesService){}
entertainmentDisplay:any=[];

  ngOnInit(): void {
    this.service.entertainmentnews().subscribe((result)=>{
      this.entertainmentDisplay=result.articles;
    });
    
  }
   

}
