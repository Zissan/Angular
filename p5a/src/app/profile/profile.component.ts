import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any = {
    name:'Mike Olsen',
    age:32,
    designation:'Senior Software Developer',
    city:'Orlando',
    image:'/assets/images/profile.png'
  }
  constructor() { }

  ngOnInit() {
  }

}
