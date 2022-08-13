import { Injectable } from '@angular/core';
import { DEPARTMENTS } from '../db/departments.db';
import { Department } from '../interfaces/department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  arrDepartments!: Department[]

  constructor() {
    this.arrDepartments = DEPARTMENTS
  }

  getAllDepartments(): Department[] {
    return this.arrDepartments
  }
}
