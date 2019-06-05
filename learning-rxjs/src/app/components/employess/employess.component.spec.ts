import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployessComponent } from './employess.component';
import { EmployeeService } from '../employees/employee.service';

describe('EmployessComponent', () => {
  let component: EmployessComponent;
  let fixture: ComponentFixture<EmployessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployessComponent ],
      providers:[
        EmployeeService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
