import { Component, OnInit } from '@angular/core';
import{NewsapiservicesService} from '../services/newsapiservices.service'
@Component({
  selector: 'app-bussinessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BussinessnewsComponent  implements OnInit{

  constructor(private service:NewsapiservicesService){}
  businessDisplay:any=[];
  ngOnInit(): void {
    this.service.bussiness().subscribe((result: { articles: any; })=>{
      this.businessDisplay=result.articles;

    });
   
  }

}
