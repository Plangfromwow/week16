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
    this.refresh();
  }

  refresh(){
    this.DepSrv.getAll((result: Department[]) => {
        //inside here is where we put the code for doing something with the list we got back
        this.TheList = result;
      });
  }

// after we delete we have to refresh the list.
  doDeleteOne(id: string) {
    this.DepSrv.delete(
      (result: any) => {
        console.log(result);
        this.refresh();
      }, id
    )
  }

  doEdit(dep:Department){
    this.DepSrv.update((result:any) =>{
      this.refresh();
    },dep);
  }

}
