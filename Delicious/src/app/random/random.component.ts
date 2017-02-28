import {Component, OnInit} from '@angular/core';
import {FoodService} from "../services/food.service";
import * as _ from 'lodash';
import {MainpageService} from "../services/mainpage.service";

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {

  private recipeUrl: string = 'https://spoonacular.com/recipes';
  private recipes: any = [];

  constructor(private mainpageService: MainpageService) { }

  public getRandom = () =>{
       this.mainpageService.getRandom().subscribe(
      res =>  {
        //console.log(res);
        //console.log(this.recipeUrl+_.kebabCase(res[0].title)+'-'+res[0].id);
        res.map((resepti) => {
          resepti.url =  this.recipeUrl+_.kebabCase(resepti.title)+'-'+resepti.id;
        });
        console.log(res);
        this.recipes = res;
      }
    )

  }



  ngOnInit() {
  }

}



