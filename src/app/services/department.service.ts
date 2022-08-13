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

  myDepartment: Department | any
  getById(_id: number): Department | any {
    return this.myDepartment = this.arrDepartments.find(department => department.id == _id)
  }
}
