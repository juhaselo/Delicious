import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private name: string = '';
  private  pwd: string = '';

  /*constructor private foodService: FoodService , private router:Router {} */

  constructor() { }

  ngOnInit() {
  }

}



