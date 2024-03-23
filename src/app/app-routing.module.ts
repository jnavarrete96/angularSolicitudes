import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterEmployeeComponent } from './components/employees/register-employee/register-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path:"employeeRegister",
    component: RegisterEmployeeComponent,
    pathMatch:'full'
  },
  {
    path:"employees",
    component: EmployeesListComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
