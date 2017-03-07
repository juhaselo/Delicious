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

  ingredients: any = [{id: 'ingredient1'}];

  private ingredient1: string = '';
  private ingredient2: string = '';
  private ingredient3: string = '';
  private ingredient4: string = '';
  private ingredient5: string = '';
  private ingredient6: string = '';

  constructor(private  foodService: FoodService, private router: Router) {
  }

  addNewItem = () => {
    var newItemNo = this.ingredients.length + 1;
    this.ingredients.push({'id': 'ingredient' + newItemNo});
    console.log(this.ingredients);
  };

  removeItem = () => {
    var lastItem = this.ingredients.length - 1;
    this.ingredients.splice(lastItem);
    console.log(this.ingredients);
  };

  getFridgefood = (lomake) => {
    console.log(lomake);
    console.log(this.ingredients);
    let aineet: string = '';
    for (let i in this.ingredients) {
      aineet += lomake[i] + ',';
    }
    console.log(aineet);
    this.foodService.setIngredients(aineet);
    this.resipecomponent.getRecipe('aine');
  };

  ngOnInit() {
  }

}
