import { Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ShowemployeeComponent } from './showemployee/showemployee.component';
import { EmpbyidComponent } from './empbyid/empbyid.component';

export const appRoutes: Routes = [
	{
		path: 'addemployee',
		component: AddemployeeComponent
	}
	,{
		path: 'addemployee/:empId',
		component: AddemployeeComponent
	}
	,
	{
		path: 'showemployee',
		component: ShowemployeeComponent
		/*,
		children:[
			{
				path: ':empId',
				component: EmpbyidComponent
			}
		]
		*/
	},
	{
		path: 'showemployee/:empId',
		component: EmpbyidComponent
	},
	{
		path: '',
		redirectTo: '/showemployee',
		pathMatch: 'full'
	}
]