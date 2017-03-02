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

  public getRecipe = (aine: string) => {
    this.foodService.getRecipe(aine).subscribe(
      res => {
        console.log(res);
        //console.log(this.recipeUrl+_.kebabCase(res[0].title)+'-'+res[0].id);

        if (res.baseUri) {
          res.results.map((resepti) => {
            resepti.image = res.baseUri + resepti.image;
            resepti.url = this.recipeUrl + _.kebabCase(resepti.title) + '-' + resepti.id;
          });
          this.recipes = res.results;
        } else {
          res.map((resepti) => {
            resepti.url = this.recipeUrl + _.kebabCase(resepti.title) + '-' + resepti.id;
          });
          this.recipes = res;
        }
      }
    )

  }

  ngOnInit() {

  }

}
