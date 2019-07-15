import { Component, OnInit,Pipe, PipeTransform } from '@angular/core';
import {FlickerServiceService} from '../flicker-service.service'; //import Flickerservice 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  images:any[]=[];
  searchFilter:Object;
  searchText="";
  temp:any[]=[];
  constructor(private data:FlickerServiceService) { }

  ngOnInit() {
    //fetch data from service
this.data.getFlickrData().subscribe(data=>{
   this.images=data["feed"]["entry"];
  console.log(this.images);
})

  }
  //Function to filter based on the search input
  filterdata(value:String){
    
    for(var i=0;i<this.images.length;i++)
    {
    
    if(this.images[i].author[0].name[0]===value) //checking search text against author name
    {   
      this.temp.push(this.images[i]);   //if search text exists in array, add the value to the temp array
    }
  }
    this.images=this.temp; //replace initial array with filtered array

  }
  }


