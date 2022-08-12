import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  myEmployees: Employee[] | any

  isActive: boolean = true

  constructor
  (
    private employeeService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.myEmployees = this.employeeService.getAllEmployees()
  }

  changeActive() {
    if(this.isActive.valueOf() === true){
      return this.isActive = false
    } else {
      return this.isActive = true
    }
  }  
}
