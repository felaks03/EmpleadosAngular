import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  myEmployee: Employee | any
  constructor
  (
    private activatedRoute: ActivatedRoute,
    private employeesService: EmployeesService
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
  }

}
