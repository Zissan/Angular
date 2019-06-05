import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { IEmployee } from '../employess/IEmployee';

import { defer, of } from 'rxjs';

describe('EmployeeService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let employeeService: EmployeeService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    employeeService = new EmployeeService(<any> httpClientSpy);
  });

  it('should be created', () => {
    expect(employeeService).toBeTruthy();
  });

  describe('when getEmployees is called', ( () => {
    let employees: IEmployee[];
    
    it('should return expected hero', () => {
      //arrange
      employees = [
        {
          ID:1,
          Name: "Alex"
        },
        {
          ID: 2,
          Name: "John"
        }
      ]
      httpClientSpy.get.and.returnValue(defer(() => Promise.resolve(employees)));

      //act
      let employeePromise = employeeService.getEmployees();

      //assert
      employeePromise.subscribe( emps => {
        expect(emps).toEqual(employees, 'expected employees');
      })

    });

    it('should call http get method once', () => {
      //arrange
      httpClientSpy.get.and.returnValue(of(true));

      //act
      let employeePromise = employeeService.getEmployees();
      
      //assert
      expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

  }))

});
