import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food.service";
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  private recipeUrl: string = 'https://spoonacular.com/recipes';
  private recipes: any = [];

  constructor(private foodService: FoodService) {
  }

  private apivastaus: any = [];

  ngOnInit() {
    this.foodService.getRecipe('milk, sugar').subscribe(
      res =>  {
        //console.log(res);
        //console.log(this.recipeUrl+_.kebabCase(res[0].title)+'-'+res[0].id);
        res.map((resepti) => {
          resepti.url =  this.recipeUrl+_.kebabCase(resepti.title)+'-'+resepti.id;
        });
        console.log(res);
        this.recipes = res;
      }
    )
  }

}
