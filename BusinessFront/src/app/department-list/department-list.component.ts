import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  TheList: Department[] = [];


  constructor(public DepSrv: DepartmentService) { }

  ngOnInit(): void {
    this.DepSrv.getAll(
      (result: Department[]) => {
        //inside here is where we put the code for doing something with the list we got back
        this.TheList = result;
      }
    );
  }

  doDeleteOne(id: string) {
    this.DepSrv.delete(
      (result: string) => {
        console.log(result)
      }, id
    )
  }

}
