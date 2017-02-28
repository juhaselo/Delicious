import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";
import { RandomComponent } from "../random/random.component";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }

}
