import { Component, OnInit } from '@angular/core';

import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {

  constructor(private service:NewsapiservicesService){}
       healthDisplay:any=[];

  ngOnInit(): void {
    this.service.healthnews().subscribe((result)=>{
      this.healthDisplay=result.articles;
    });
   
  }

}
