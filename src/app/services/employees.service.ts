import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../db/employees.db';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  arrEmployes: Employee[] = []
  constructor() {
    this.arrEmployes = EMPLOYEES
  }

  getAllEmployees(): Employee[] {
    return this.arrEmployes
  }
}
