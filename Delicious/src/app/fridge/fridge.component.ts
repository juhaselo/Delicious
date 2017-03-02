
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

  private ingredient: string = '';
  private ingredient2: string = '';
  private ingredient3: string = '';


  constructor(private  foodService: FoodService, private router: Router) {
  }


  getFridgefood = () => {

    this.foodService.setIngredients(`${this.ingredient}, ${this.ingredient2}, ${this.ingredient3}`);
    this.resipecomponent.getRecipe('aine');
  };


  ngOnInit() {
  }

}
