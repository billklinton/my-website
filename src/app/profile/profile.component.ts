import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  birthDate = new Date('1997-01-29');
  ageDifMs = (Date.now() - this.birthDate.getTime());
  ageDate = new Date(this.ageDifMs);
  age = Math.abs(this.ageDate.getUTCFullYear() - 1970);
  constructor() {
   }

  ngOnInit(): void {
  }

}
