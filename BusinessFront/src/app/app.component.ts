import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DepartmentService } from './department.service';
import { Department } from './department';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusinessFront';

constructor(public http:HttpClient,public DepSrv:DepartmentService) {}

//https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

  finishedWithCall(obj:any){
    console.log(obj);
  }
    // LONG VERSION for self study:
		// If you want to dive in head first to understand this (but this is strictly optional): The get() method takes a single
		// parameter, a string for a URL, and it returns an object that has a method called subscribe. We the call that object's
		// subscribe method, passing in the function we want called after the URL call comes back.

  callAPI(){
    this.http.get<any>('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe(this.finishedWithCall);
  }

  getDepartments(){
    this.DepSrv.getAll(
      (result:Department[]) =>{
        //here is where we receive the department data.
        console.log(result);
      })
  }


}
