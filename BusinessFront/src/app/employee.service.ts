import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apiresponse } from './apiresponse';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getAll(cb: any) {
		// https://localhost:7158/Employee
		this.http.get<Employee[]>('https://localhost:7158/Employee').subscribe(cb);
	}

	getOne(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.get<Employee>(`https://localhost:7158/Employee/${id}`).subscribe(cb);
	}

	add(cb: any, Emp: Employee) {
		this.http.post<Employee>('https://localhost:7158/Employee', Emp).subscribe(cb);
	}

	delete(cb: any, id: number) {
		// Typo! Take out the [].
		this.http.delete<Apiresponse>(`https://localhost:7158/Employee/${id}`).subscribe(cb);
	}

	update(cb: any, Emp: Employee) {
		this.http.put<Apiresponse>('https://localhost:7158/Employee', Emp).subscribe(cb);
	}

	constructor(private http: HttpClient) {}
}
