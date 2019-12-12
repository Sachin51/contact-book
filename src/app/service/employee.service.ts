import { Employee } from './../model/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string ='http://localhost:8080/employee/';
  constructor(private httpClient: HttpClient) { }

  getEmployees() :Observable<any> {
    return this.httpClient.get<any>(this.baseUrl +'getAllEmployees');
  }

  addEmployee(employee: Employee) : Observable<any> {
    console.log('Employee: '+employee);
    
    return this.httpClient.post<any>(this.baseUrl+'addEmployee', employee);
  }
}
