import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEmployeesComponent } from './components/card-employees/card-employees.component';
import { E404Component } from './components/e404/e404.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: ListEmployeesComponent},
  {path: 'new-employee', component: FormComponent},
  {path: 'employee/:idemployee', component: ViewEmployeesComponent},
  {path: '**', component: E404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
