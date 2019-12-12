import { EmployeeService } from './../../service/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
  providers:[DecimalPipe]
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[];
  errorMsg: String;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.getEmployees()
      .subscribe(
        data => {
          this.employees = data;
        }, error => {
          this.errorMsg = error;
        }
      );
  }

}
