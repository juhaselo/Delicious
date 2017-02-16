import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private name: string = '';
  private  pwd: string = '';

  constructor() { }

  ngOnInit() {
  }

}
