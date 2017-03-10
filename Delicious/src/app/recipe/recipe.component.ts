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
  private title: any;
  private image: any;
  private suosikit = false;


  constructor(private foodService: FoodService) {
  }

  setPrefrences = (resepti) => {


    let reseptit = [];
    if(localStorage.getItem('recipes')!= null){
      reseptit = JSON.parse (localStorage.getItem('recipes'));
    }

    reseptit.push(resepti);
    localStorage.setItem('recipes', JSON.stringify(reseptit));

    alert("Added to favourites");



  };


  public getRecipe = (aine: string) => {
    this.suosikit = false;
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
        } else if (res.recipes) {
          res.recipes.map((resepti) => {
            resepti.url = this.recipeUrl + _.kebabCase(resepti.title) + '-' + resepti.id;
          });
          this.recipes = res.recipes;

        } else {
          res.map((resepti) => {
            resepti.url = this.recipeUrl + _.kebabCase(resepti.title) + '-' + resepti.id;
          });
          this.recipes = res;
        }
      }
    )

  }

  public haeSuosikit = () => {
    this.recipes = JSON.parse (localStorage.getItem('recipes'));
    this.suosikit = true;

  }


  ngOnInit() {

  }

}
