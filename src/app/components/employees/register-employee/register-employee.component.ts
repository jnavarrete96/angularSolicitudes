import { Component } from '@angular/core';
import { IEmployee } from '../employee.interface';
import { EmployeeService} from "../../../services/employee/employee-service.service";

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})


export class RegisterEmployeeComponent{
  
  //nuevo empleado
  newEmployee: IEmployee = {
    nmDocument: '',
    dsDocumentType: '',
    dsName:'',
    dsLastName:'',
    dsTelephone:'',
    dsAddress:'',
    feDateEntry:'',
    feDateDeparture:'',
    dsTypeOfContract:'',
    dsEmployeeStatus:''
  }

  constructor(private employeeService: EmployeeService) { }
   // Variable para almacenar el mensaje de éxito
   successMessage: string = '';

  formSubmit(){
    this.employeeService.registerEmployee(this.newEmployee).subscribe(
      response =>{
        console.log('Empleado registrado correctamente',response);
        this.clearForm();
        // Mostrar el mensaje de éxito
        this.successMessage = 'Empleado creado correctamente.';
        // Desaparecer el mensaje después de unos segundos
        setTimeout(() => {
          this.successMessage = '';
        }, 3000); // Desaparecer después de 5 segundos
      },
      error =>{
        console.log('Error al registrar empleado',error);
      }
    );
  }

  clearForm() {
    this.newEmployee = {
      nmDocument: '',
      dsDocumentType: '',
      dsName:'',
      dsLastName:'',
      dsTelephone:'',
      dsAddress:'',
      feDateEntry:'',
      feDateDeparture:'',
      dsTypeOfContract:'',
      dsEmployeeStatus:''
    };
  }
}
