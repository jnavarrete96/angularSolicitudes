import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEmployee } from '../../components/employees/employee.interface';
import { enviroment } from 'src/environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // Método para obtener un empleado por su ID
  getEmployee(id: number): Observable<IEmployee> {
    const url = `${enviroment.BASIC_URL}/api/v1/employee/${id}`;
    return this.http.get<IEmployee>(url);
  }

  // Método para actualizar un empleado
  updateEmployee(employee: IEmployee): Observable<any> {
    const url = `${enviroment.BASIC_URL}/api/v1/employee/${employee.nmIdEmployee}`;
    return this.http.put(url, employee);
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<{object: IEmployee[]}>(`${enviroment.BASIC_URL}/api/v1/employees`)
            .pipe(
                map(response => response.object)
            );
  }

  registerEmployee(employee: IEmployee): Observable<any> {
    return this.http.post<any>(`${enviroment.BASIC_URL}/api/v1/employee`, employee);
  }
}
