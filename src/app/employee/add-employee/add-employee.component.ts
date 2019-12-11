import { EmployeeService } from './../../service/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  dob: NgbDateStruct;
  dateOfJoining: NgbDateStruct;
  addEmployeeForm: FormGroup;
  //date: { year: number, month: number };
  ratingOfCompany = 8;

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService,
    private calendar: NgbCalendar, private dobConfig: NgbDatepickerConfig, private dateOfJoiningConfig: NgbDatepickerConfig) { 
      dobConfig.maxDate = { year: (new Date().getFullYear()-18), month: new Date().getMonth(), day: new Date().getDay()};
      dobConfig.minDate = { year: (new Date().getFullYear()-60), month: new Date().getMonth(), day: new Date().getDay()};
      
     // dateOfJoiningConfig.maxDate = { year: new Date().getFullYear(), month: new Date().getMonth(), day: new Date().getDay()};
    }

  ngOnInit() {
    this.addEmployeeForm = this.formBuilder.group({
      empName: ['', Validators.required],
      homeTown: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      dob: ['', Validators.required],
      ratingOfCompany: ['8', Validators.required],
      createdAt: [],
      updatedAt: []
    });
  }

  selectToday() {
    this.dateOfJoining = this.calendar.getToday();
  }

  onSubmit() {
    console.log(this.addEmployeeForm.value);
    this.employeeService.addEmpplyee(this.addEmployeeForm.value)
      .subscribe(data => {
        this.router.navigate(['list-employee']);
      });
  }
}
