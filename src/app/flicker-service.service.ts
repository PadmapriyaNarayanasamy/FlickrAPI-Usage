import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FlickerServiceService {

  //import HttpClient to access API
  constructor(private http:HttpClient) { }

  getFlickrData() { 
    //API call to nodeJS service
     return this.http.get('http://localhost:8080/getFlickrData');
  }

}
