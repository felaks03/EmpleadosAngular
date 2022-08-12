import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPLOYEES } from '../db/employees.db';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  arrEmployes: Employee[] = []
  constructor
  (
    private activatedRoute: ActivatedRoute
  ) {
    this.arrEmployes = EMPLOYEES
  }

  getAllEmployees(): Employee[] {
    return this.arrEmployes
  }

  getById(_id: number): Employee | any {
    return this.arrEmployes.find(employee => employee.id === _id)
  }
}
