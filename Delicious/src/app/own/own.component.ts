import {Component, OnInit, ViewChild} from '@angular/core';
import {FoodService} from "../services/food.service";
import {Router} from "@angular/router";
import {RecipeComponent} from "../recipe/recipe.component";

@Component({
  selector: 'app-own',
  templateUrl: './own.component.html',
  styleUrls: ['./own.component.scss']
})
export class OwnComponent implements OnInit {

  @ViewChild (RecipeComponent)
  private resipecomponent: RecipeComponent;
  private recipe: any = [];

  constructor(private ownService : FoodService, private  router: Router) { }

//food =(localStorage.getItem('foodname'));
//picture = (localStorage.getItem('picture'));
//url =(localStorage.getItem('url'));

  //setPrefrences2 = (formValues: any) => {
  // localStorage.setItem('recipe', JSON.stringify(formValues));
  // localStorage.setItem('recipe',"Instant Pot Hawaiian Chicken");
  // this.recipe = formValues;

   //};

  ngOnInit() {


    this.resipecomponent.haeSuosikit();

  }

}

