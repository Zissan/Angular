import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
@Component({selector: 'app-employess', template: ''})
class EmployessStubComponent{}
let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;

describe('AppComponent', () => {
  beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations:[
          AppComponent,
          EmployessStubComponent
        ]
      })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
      })
  }))

  beforeEach(() => {
    fixture.detectChanges();
  })

  it('should instantiate the component', () => {
    expect(comp).not.toBeNull();
  });
})