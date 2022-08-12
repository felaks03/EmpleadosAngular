import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEmployeesComponent } from './components/card-employees/card-employees.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: ListEmployeesComponent},
  {path: 'new-employee', component: FormComponent},
  {path: 'employee/:idemployee', component: CardEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
