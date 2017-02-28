import {Component, OnInit, ViewChild} from '@angular/core';
import {RecipeComponent} from "../recipe/recipe.component";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.scss']
})
export class RecipeSearchComponent implements OnInit {

  private recipes: any = [];
  private search: string;

  @ViewChild(RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor(private searchService: FoodService) {
  }

  searchFood = () => {
    this.searchService.setSearch(this.search);
    this.resipecomponent.getRecipe('nimi');
  };


  ngOnInit() {
  }

}

