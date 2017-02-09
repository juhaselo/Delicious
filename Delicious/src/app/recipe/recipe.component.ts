import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private foodService = FoodService) {
    }
  private meal: any[];


  ngOnInit() {

    this.foodService.makeFood()
      .subscribe((res) => {
          console.log(res);}
      )


  }

}
