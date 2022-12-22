import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../services/newsapiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent  implements OnInit {
  

  constructor(private service:NewsapiservicesService){ }
   technewsDisplay: any=[];
    
  
    ngOnInit(): void {
      this.service.techNews().subscribe((result: { articles: any; })=>{

        this.technewsDisplay=result.articles;
      });

    }
  }


