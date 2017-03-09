import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../services/food.service";
import {RandomComponent} from "../random/random.component";
import {RecipeComponent} from "../recipe/recipe.component";
@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.scss']
})
export class HolidayComponent implements OnInit {

  private christmas: string;
  private halloween: string;
  private easter: string;
  private newyear: string;
  private valentine: string;
  private patrick: string;
  private thanksgiving: string;

  @ViewChild(RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor(private holidayService: FoodService) {}

  getChristmas = () => {
    this.holidayService.setChristmas(this.christmas);
    this.resipecomponent.getRecipe('xmas');
  };

  getHalloween = () => {
    this.holidayService.setHalloween(this.halloween);
    this.resipecomponent.getRecipe('pumpkin');
  };

  getEaster = () => {
    this.holidayService.setEaster(this.easter);
    this.resipecomponent.getRecipe('bunny');
  };

  getNewyear = () => {
    this.holidayService.setNewyear(this.newyear);
    this.resipecomponent.getRecipe('year');
  };

  getValentine = () => {
    this.holidayService.setValentine(this.valentine);
    this.resipecomponent.getRecipe('valday');
  };

  getPatrick = () => {
    this.holidayService.setPatrick(this.patrick);
    this.resipecomponent.getRecipe('patricks');
  };

  getThanksgiving = () => {
    this.holidayService.setThanksgiving(this.thanksgiving);
    this.resipecomponent.getRecipe('thanks');
  };
  ngOnInit() {
  }

}
