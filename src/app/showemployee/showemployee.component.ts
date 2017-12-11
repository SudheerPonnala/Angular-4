import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedetailsComponent } from './employeedetails.service';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})
export class ShowemployeeComponent implements OnInit {
  empDetails;
  constructor(private routes: Router, private service: EmployeedetailsComponent) {
  		this.empDetails = service.getempDetails();
  		console.log(this.empDetails);
  }

  getEmp(emp,ind){
  		this.service.insertEmp(emp);
  		this.routes.navigate(['showemployee',ind]);
  }	

  editEmployee(emp,ind){

  		this.service.insertEmp(emp);
  		this.routes.navigate(['addemployee',ind]);
  }

  delEmployee(index){
  		this.service.deleteEmployee(index);
  }

  ngOnInit() {
  }

}
