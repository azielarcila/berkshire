import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})



export class EmployeeComponent implements OnInit {
 
   employees: any;
  hidenewform: boolean = true;

  constructor(private _http: HttpService) { }

  ngOnInit(): void { 

    this._http.getEmployees().subscribe(data => {
      this.employees = data
      console.log(this.employees);
    }
  );
  }


  ShowNewForm(){
    if(this.hidenewform)
    this.hidenewform = false;
    else
    this.hidenewform = true;
  }

  createEmployee(empdata: NgForm){ 
    
   this._http.createEmployee(empdata).subscribe(data => { 
    this.employees.push(data);   
  }); 
 
}



}
