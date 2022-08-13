import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Route, Router } from '@angular/router';
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
    private departmentService: DepartmentService,
    private router: Router
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

  id: number = 3
  photo: string = "https://www.asofiduciarias.org.co/wp-content/uploads/2018/06/sin-foto.png"
  department: Department | any
  getData() {
    if(this.formModel.valid){
      this.formModel.value.id = this.id
      this.formModel.value.photo = this.photo
      this.formModel.value.status = true
      this.id++
      this.employeesService.getAllEmployees().push(this.formModel.value)
      this.router.navigate(['/employees'])

      this.department = this.departmentService.getById(this.formModel.value.department)
      this.department.numEmployees++
      console.log(this.department)
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
