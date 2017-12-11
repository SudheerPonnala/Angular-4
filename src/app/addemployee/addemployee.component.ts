import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EmployeedetailsComponent } from '../showemployee/employeedetails.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  newEmp = {};
  _editMode;	
  rForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute, public service: EmployeedetailsComponent, private fBuilder: FormBuilder) {
  		this.rForm = fBuilder.group({
  			"name": ['', Validators.required],
  			"id": ['', Validators.required]
  		});
  		service.addIndex(this.route.snapshot.params.empId);
  		this._editMode = this.route.snapshot.params.empId;
  		if(this._editMode){
  			(this.rForm).setValue(service.getInsertedEmp());
  		}
  }

  addEmployee(x){
  		if(this._editMode){
  			alert("updated successfully");
  			this.service.updateDetails(x);
  		}else{
  			alert("added successfully");
  			this.service.addEmployee(x);
  		}
  		this.router.navigate(['showemployee']);
  }

  ngOnInit() {
  }

}
