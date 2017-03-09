import {Component, OnInit, ViewChild} from '@angular/core';
import {RecipeComponent} from "../recipe/recipe.component";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  private special: string;

  @ViewChild (RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor(private specialService:FoodService ) { }

  getGlutenfree = () => {
    this.specialService.setGlutenfree(this.special);
    this.resipecomponent.getRecipe('glutenfree');

  };

  getHealthy = () => {
    this.specialService.setHealthy(this.special);
    this.resipecomponent.getRecipe('healthy');

  };

  getLactosefree = () => {
    this.specialService.setSLactosefree(this.special);
    this.resipecomponent.getRecipe('lactosefree');

  };

  getPaleo = () => {
    this.specialService.setPaelo(this.special);
    this.resipecomponent.getRecipe('paleo');

  };

  getSugarfree = () => {
    this.specialService.setSugarfree(this.special);
    this.resipecomponent.getRecipe('sugarfree');

  };

  getFatfree = () => {
    this.specialService.setFatfree(this.special);
    this.resipecomponent.getRecipe('fatfree');

  };


  ngOnInit() {
  }

}
