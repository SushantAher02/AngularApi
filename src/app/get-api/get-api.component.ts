import { Component } from '@angular/core';
import { GetapiserviceService } from '../getapiservice.service';

@Component({
  selector: 'app-get-api',
  templateUrl: './get-api.component.html',
  styleUrls: ['./get-api.component.css']
})
export class GetApiComponent {
  apiData:any[]=[];
  getAPIADataa:any;
  

  constructor(private callApiService:GetapiserviceService)

  {}
  ngOnInit(){
    this.fetchApidata();
  }
  fetchApidata(){
    this.callApiService.getApiData().subscribe(
     ( data:any[])=>{
      this.apiData=data;
     },
     (error:any)=>{
      console.error('Api error',error);
     }
    );
  }
}
