import {Component, OnInit, ViewChild} from '@angular/core';
import {RecipeComponent} from "../recipe/recipe.component";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  private meal: string;

  @ViewChild (RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor( private mealService: FoodService) { }

  getBreakfast = () => {
    this.mealService.setBreakfast(this.meal);
    this.resipecomponent.getRecipe('breakfast');
  };

  getLunch = () => {
    this.mealService.setLunc(this.meal);
    this.resipecomponent.getRecipe('lunch');
  };

  getSnack = () => {
    this.mealService.setSnack(this.meal);
    this.resipecomponent.getRecipe('snack');
  };


  getDinner = () => {
    this.mealService.setDinner(this.meal);
    this.resipecomponent.getRecipe('dinner');
  };

  getSupper = () => {
    this.mealService.setSupper(this.meal);
    this.resipecomponent.getRecipe('supper');
  };



  ngOnInit() {
  }

}


