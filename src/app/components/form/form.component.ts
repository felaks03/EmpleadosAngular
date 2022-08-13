import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/interfaces/department.interface';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formModel: FormGroup

  myDepartments!: Department[]
  constructor
  (
    private employeesService: EmployeesService,
    private departmentService: DepartmentService
  ) {
    this.formModel = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+\@\S+\.[com, es]/)
      ]),
      dni: new FormControl('', [
        Validators.required,
        this.dnivalidator
      ]),
      department: new FormControl('', [
        Validators.required
      ])
    }, [])
  }

  ngOnInit(): void {
    this.myDepartments = this.departmentService.getAllDepartments()
  }

  getData() {
    if(this.formModel.valid){
      this.employeesService.getAllEmployees().push(this.formModel.value)
    } else{
      console.log("El formulario no es válido")
    }
  }

  dnivalidator(_dni: AbstractControl): any {
    let arrLetras: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
    
    let dni = _dni.value
    let dniSplit = dni.split("")

    let dniNumber = 0
    for(let i = 0; i < 8; i++) {
      dniNumber += dniSplit[i]
    }
    console.log(dniNumber)
    

    if(dniSplit[8] == arrLetras[Number(dniNumber) % 23]) {
      return null
    } else {
      return {'dnivalidator': true}
    }
  }

  checkControl(_get: string, _error: string) {
    return this.formModel.get(_get)?.hasError(_error) && this.formModel.get(_get)?.touched
  }

  
}
