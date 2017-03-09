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

  private holiday: string;

  @ViewChild(RecipeComponent)
  private resipecomponent: RecipeComponent;

  constructor(private holidayService: FoodService) {}

  getHoliday = () => {
    this.holidayService.setHoliday(this.holiday);
    this.resipecomponent.getRecipe('holiday');
    console.log(this.holiday);
  };

  ngOnInit() {
  }

}
