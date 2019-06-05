import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IEmployee } from './components/employess/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    let employees: IEmployee[] = [
      {
        ID:1,
        Name: "Alex"
      },
      {
        ID: 2,
        Name: "John"
      }
    ]

    return {employees};
  }

}
