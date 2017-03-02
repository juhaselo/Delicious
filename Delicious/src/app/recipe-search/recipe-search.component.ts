import {Component, OnInit, ViewChild} from '@angular/core';
import {RecipeComponent} from "../recipe/recipe.component";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  private search: string;
  private diet: string = '';
  private intolerances: string = '';
  private exludeIngredients: string = '';
  private cuisine: string = '';
  private foodtype: string = '';

  @ViewChild(RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor(private searchService: FoodService) {
  }

  searchFood = () => {
    this.searchService.setSearch(`${this.search}, ${this.diet}, ${this.intolerances}, ${this.exludeIngredients}, ${this.cuisine}, ${this.foodtype}`);
    this.resipecomponent.getRecipe('nimi');
  };


  ngOnInit() {
  }

}
