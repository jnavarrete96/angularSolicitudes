import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee/employee-service.service';
import { IEmployee } from '../employee.interface';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  employee: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getEmpleado(id);
  }

  getEmpleado(id: number): void {
    this.employeeService.getEmployee(id).subscribe(employee => this.employee = employee);
  }

  guardarCambios(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(() => {
      // Redirigir a la lista de empleados después de la actualización
      this.router.navigate(['/employees']);
    });
  }
}
