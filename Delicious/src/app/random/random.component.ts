import {Component, OnInit, ViewChild} from '@angular/core';
import {RecipeComponent} from "../recipe/recipe.component";
import {FoodService} from "../services/food.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  private random: string;

  @ViewChild(RecipeComponent)
  private resipecomponent: RecipeComponent;


  constructor(private randomService: FoodService) { }


  getRandom = () => {
    this.randomService.setRandom(this.random);
    this.resipecomponent.getRecipe('random');
    console.log(this.random);
  };

  ngOnInit() {

  }

}
