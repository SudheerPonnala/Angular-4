import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmployeedetailsComponent } from '../showemployee/employeedetails.service';
@Component({
  selector: 'app-empbyid',
  templateUrl: './empbyid.component.html',
  styleUrls: ['./empbyid.component.css']
})
export class EmpbyidComponent implements OnInit {
  //_empName;
  finalEmp;
  constructor(private route: ActivatedRoute, private service: EmployeedetailsComponent) {
		this.finalEmp = service.getInsertedEmp();
  }

  ngOnInit() {
  }

}
