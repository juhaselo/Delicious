import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../services/food.service";
import {RandomComponent} from "../random/random.component";
import {RecipeComponent} from "../recipe/recipe.component";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild(RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor() {
  }

  ngOnInit() {
    this.resipecomponent.getRecipe('randomi');

  }

}
