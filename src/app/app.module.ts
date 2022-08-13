import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CardEmployeesComponent } from './components/card-employees/card-employees.component';
import { E404Component } from './components/e404/e404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormComponent,
    ViewEmployeesComponent,
    ListEmployeesComponent,
    CardEmployeesComponent,
    E404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
