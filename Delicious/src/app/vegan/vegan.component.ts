import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../services/food.service";
import {RecipeComponent} from "../recipe/recipe.component";

@Component({
  selector: 'app-vegan',
  templateUrl: './vegan.component.html',
  styleUrls: ['./vegan.component.scss']
})
export class VeganComponent implements OnInit {

  private vegan: string;
  private ovo: string;
  private lacto: string;
  private pesca: string;

  @ViewChild (RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor( private veganService: FoodService) { }

  ngOnInit() {
  }

  getVegan = () => {
    this.veganService.setVegan(this.vegan);
    this.resipecomponent.getRecipe('vegan');
  };

  getOvo = () => {
    this.veganService.setOvo(this.ovo);
    this.resipecomponent.getRecipe('ovo');
  };

  getLacto = () => {
    this.veganService.setLacto(this.lacto);
    this.resipecomponent.getRecipe('lacto');
  };

  getPesca = () => {
    this.veganService.setPesca(this.pesca);
    this.resipecomponent.getRecipe('pesca');
  };

}
