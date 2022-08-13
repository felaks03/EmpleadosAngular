import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-card-employees',
  templateUrl: './card-employees.component.html',
  styleUrls: ['./card-employees.component.css']
})
export class CardEmployeesComponent implements OnInit {

  myEmployees: Employee[] = []
  constructor
  (
    private employeesService: EmployeesService
  ) { 
    this.myEmployees = employeesService.arrEmployes
  }

  ngOnInit(): void {
  }
  changedEmployee: Employee | any

  changeActive($event: any) {
    let id: number = $event.target.value
    this.changedEmployee = this.employeesService.getById(id)
    if (this.changedEmployee.status == true){
      this.changedEmployee.status = false
    } else {
      this.changedEmployee.status = true
    }
  }

  duplicatedEmployee: Employee | any

  // duplicateEmployee($event: any) {
  //   let id: number = $event.target.value
  //   this.duplicatedEmployee = this.employeesService.getById(id)
  //   this.employeesService.arrEmployes.push(this.duplicatedEmployee)
  // }
}
