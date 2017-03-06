
import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../services/food.service";
import * as _ from 'lodash';
import {Router} from "@angular/router";
import {RecipeComponent} from "../recipe/recipe.component";

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {

  @ViewChild(RecipeComponent)
  private resipecomponent: RecipeComponent;

  ingredients: any = [{id: 'ingredient1'}, {id: 'ingredient2'}];

  private ingredient1: string = '';
  private ingredient2: string = '';
  private ingredient3: string = '';
  private ingredient4: string = '';
  private ingredient5: string = '';
  private ingredient6: string = '';

  constructor(private  foodService: FoodService, private router: Router) {
  }

  addNewItem = () =>{
    var newItemNo = this.ingredients.length + 1;
    this.ingredients.push({'id': 'ingredient'+newItemNo});
    console.log(this.ingredients);
  };

  removeItem = () =>{
    var lastItem = this.ingredients.length - 1;
    this.ingredients.splice(lastItem);
    console.log(this.ingredients);
  };

  getFridgefood = () => {

    this.foodService.setIngredients(`${this.ingredients[0]}, ${this.ingredient2}, ${this.ingredient3}, ${this.ingredient4}, ${this.ingredient5}, ${this.ingredient6}`);
    this.resipecomponent.getRecipe('aine');
  };

  ngOnInit() {
  }

}
