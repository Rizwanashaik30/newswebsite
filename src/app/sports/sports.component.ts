import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../services/newsapiservices.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
  sportsnewsDisplay: any;
  constructor(private service:NewsapiservicesService){}

  ngOnInit(): void {
    this.service.sportnews().subscribe((result)=>{
      this.sportsnewsDisplay=result.articles;
    })
   
  }

}
