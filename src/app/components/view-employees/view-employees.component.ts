import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/interfaces/department.interface';
import { Employee } from 'src/app/interfaces/employee.interface';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  myEmployee: Employee | any
  myDepartment: Department | any
  constructor
  (
    private activatedRoute: ActivatedRoute,
    private employeesService: EmployeesService,
    private departmentService: DepartmentService
  ) 
  { 

  }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.activatedRoute.params.subscribe((params: any) => {
      let id = params.idemployee
      this.myEmployee = this.employeesService.getById(id)
    })
    this.getDepartment()
  }

  changedEmployee: Employee | any

  changeInActive($event: any) {
    let id: number = $event.target.value
    this.changedEmployee = this.employeesService.getById(id)
    if (this.changedEmployee.status == true){
      this.changedEmployee.status = false
    } else {
      this.changedEmployee.status = true
    }
  }

  getDepartment() {
    this.myDepartment = this.departmentService.getById(this.myEmployee.department)
  }  


}
