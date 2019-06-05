import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employees/employee.service';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-employess',
  templateUrl: './employess.component.html',
  styleUrls: ['./employess.component.css']
})
export class EmployessComponent implements OnInit {
  employees:IEmployee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((resp) => {
      debugger;
    })
  }

}
