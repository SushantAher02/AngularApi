import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GetapiserviceService {
  
  private apiurl='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  getApiData(){
    return this.http.get<any[]>(this.apiurl);
  }
}
