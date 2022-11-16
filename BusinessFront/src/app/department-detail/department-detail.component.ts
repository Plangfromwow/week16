import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Department } from '../department';


@Component({
	selector: 'app-department-detail',
	templateUrl: './department-detail.component.html',
	styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
@Input() department:Department ={
	id:'',
	name:'',
	location:''
};

newName:string = '';
newLocation:string = '';

@Output() delete:EventEmitter<string> = new EventEmitter<string>()
@Output() edit:EventEmitter<Department> = new EventEmitter<Department>()
	constructor() {}

	ngOnInit(): void {
	}

	doDelete(){
		this.delete.emit(this.department.id);
	}

	doEdit(){
		let newDept:Department={
			id : this.department.id,
			name: this.newName,
			location: this.newLocation,
		};

		this.edit.emit(newDept);
	}
}
