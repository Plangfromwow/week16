import { Component, OnInit } from '@angular/core';
import { Apiresponse } from '../apiresponse';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

TheList: Employee[] = [];

  constructor(private EmpSrv:EmployeeService){}

  ngOnInit(): void {
    this.refresh();
  }

  newFName:string = '';
  newLName:string = '';
  newPhone:string = '';
  newEmail:string = '';
  newDepartment:string = '';
  newHireDate:Date = new Date();

  refresh(){
    this.EmpSrv.getAll((result:any)=>{
      this.TheList = result;
    });
  }

  deleteOne(id:number){
    this.EmpSrv.delete((result:Apiresponse)=>{
      this.refresh();
      console.log(result)
    },id)
  }

  saveNew(){
    let newEmp:Employee = {
      id:0,
      firstname:this.newFName,
      lastname:this.newLName,
      phone:this.newPhone,
      email:this.newEmail,
      department:this.newDepartment,
      hiredate:this.newHireDate
    }
    this.EmpSrv.add((result:any)=>{
      console.log(result);
      this.refresh();
      this.newFName = '';
      this.newLName = '';
      this.newPhone = '';
      this.newEmail = '';
      this.newDepartment = '';
      this.newHireDate = new Date();
      },newEmp);
  }

}
