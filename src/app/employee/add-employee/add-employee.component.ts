import { EmployeeService } from './../../service/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  ratingOfCompany = 8;
  dob: NgbDateStruct;
  dateOfJoining: NgbDateStruct;
  addEmployeeForm: FormGroup;
  date: { year: number, month: number };

  constructor(private formBuilder: FormBuilder, private router: Router, private employeeService: EmployeeService,
    private calendar: NgbCalendar) { }

  ngOnInit() {
    this.addEmployeeForm = this.formBuilder.group({
      empName: ['', Validators.required],
      homeTown: ['', Validators.required],
      sex: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      martialStatus: ['', Validators.required],
      dob: ['', Validators.required],
      ratingOfCompany: ['', Validators.required],
      createdAt: [],
      updatedAt: []
    });
  }

  selectToday() {
    this.dateOfJoining = this.calendar.getToday();
  }

  onSubmit() {
    this.employeeService.addEmpplyee(this.addEmployeeForm.value)
      .subscribe(data => {
        this.router.navigate(['list-employee']);
      });
  }
}
