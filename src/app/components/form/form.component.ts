import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formModel: FormGroup
  constructor() {
    this.formModel = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required
      ]),
      dni: new FormControl('', [
        Validators.required
      ]),
      department: new FormControl('', [
        Validators.required
      ])
    }, [])
  }

  ngOnInit(): void {
  }

  getData() {
    if(this.formModel.valid){
      console.log(this.formModel.value)
    } else{
      console.log("El formulario no es válido")
    }
  }

  checkControl(_get: string, _error: string) {
    return this.formModel.get(_get)?.hasError(_error) && this.formModel.get(_get)?.touched
  }
}
