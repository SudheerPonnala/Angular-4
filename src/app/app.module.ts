import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { EmployeedetailsComponent } from './showemployee/employeedetails.service';
import { EmpbyidComponent } from './empbyid/empbyid.component';


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ShowemployeeComponent,
    EmpbyidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeedetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
