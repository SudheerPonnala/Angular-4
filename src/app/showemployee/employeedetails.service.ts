import { Injectable } from '@angular/core';

@Injectable()

export class EmployeedetailsComponent{
	_toSpecificEmp;
	_actualEmployee;
	_index;
	_listOfEmployees = [
		{
			"name": "sudheer",
			//"indexVal":"1",
			"id": "sw176"
			//,
			//"src": "http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg"
		},
		{
			"name": "mahalaxmi",
			//"indexVal":"2",
			"id": "sw177"
			//,
			//"src": "https://timedotcom.files.wordpress.com/2017/10/171018-dog-halloween-costumes-wonder-woman.jpg"
		}
	];

	getempDetails(){
		return this._listOfEmployees;
	}

	addEmployee(newEmp){
		this._listOfEmployees.push(newEmp);
	}

	deleteEmployee(index){
		alert("Deleted successfully");
		this._listOfEmployees.splice(index,1);
	}

	insertEmp(specificEmp){
		this._toSpecificEmp = specificEmp;
		//this._actualEmployee = actualEpmployee;
	}

	getInsertedEmp(){
		return this._toSpecificEmp;
	}

	updateDetails(emp){
		debugger;
		this._listOfEmployees[this._index] = emp;
		console.log("final value", this._listOfEmployees[this._index]);
	}

	addIndex(ind){
		this._index = ind;
	}

	getIndex(){
		return this._index;
	}
}