import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee/employee-service.service';
import { IEmployee } from '../employee.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
    
  employees: IEmployee[] = [];

  constructor(private employeeService: EmployeeService,private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
      },
      error => {
        console.error('Error al cargar empleados:', error);
      }
    );
  }

  editEmployee(employee: IEmployee) {
    this.router.navigate(['/editar-empleado', employee.nmIdEmployee]);
  }
}
