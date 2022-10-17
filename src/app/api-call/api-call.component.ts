import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css']
})
export class ApiCallComponent implements OnInit {

  constructor(private myApi:ApiService) {

    this.putValue()
   }

  name:any

  putValue=()=>{

    this.myApi.getValue().subscribe(
      (data)=>{
        this.name = data
      }
    )

  }

  ngOnInit(): void {
  }

}
