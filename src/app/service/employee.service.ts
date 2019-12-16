import { Employee } from 'src/app/model/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

interface SearchResult {
  employees: Employee[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
}

function matches(employee: Employee, term: string, pipe: PipeTransform) {
  return employee.empName.toLowerCase().includes(term.toLowerCase())
  || pipe.transform(employee.homeTown).includes(term)
  || pipe.transform(employee.maritalStatus).includes(term);
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private loading = new BehaviorSubject<boolean>(true);
  private search = new Subject<void>();
  private employees = new BehaviorSubject<Employee[]>([]);

  baseUrl: string = 'http://localhost:8080/employee/';
  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + 'getAllEmployees');
  }

  addEmployee(employee: Employee): Observable<any> {
    console.log(employee);
    return this.httpClient.post<any>(this.baseUrl + 'addEmployee', employee);
  }
}
