import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";
import * as _ from 'lodash';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.scss']
})
export class FridgeComponent implements OnInit {

  private recipeUrl: string = 'https://spoonacular.com/recipes';
  private recipes: any = [];
  private ingredient: string = '';
  private ingredient2: string = '';
  private ingredient3: string = '';


  constructor( private  foodService: FoodService, private router: Router) { }

  //private apivastaus: any = [];

  getFridgefood = () => {

    this.foodService.getRecipe(this.ingredient);
    this.router.navigate(['fridge']);
  };



  ngOnInit() {
    this.foodService.getRecipe('ingredient,ingredient2').subscribe(
      res =>  {
       // console.log(res);
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
