import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
