import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food.service";
import {Response, Http, Headers, RequestOptions} from "@angular/http";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private http:Http) {
    }
  private meal: any[];
  private apivastaus: any = [];
  private url:string='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/classify'

  private getApi(){


    let data = `{"title":"Kroger Vitamin A & D Reduced Fat 2% Milk","upc":"","plu_code":""}`;

    let headers = new Headers({ 'X-Mashape-Key': 'ZEFA47mm54msh2oKbvCiBb4ab9vlp1m6MKjjsnBXRw7vpYgGWB','Content-Type': 'application/json','Accept': 'application/json' });


   this.http.get('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/classify')
      .subscribe(
        (res:Response) =>  {
          const json =res.json();
          this.apivastaus = json;
          console.log(this.apivastaus);
        }
      );

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options)
      .map(resp => resp.json() );

  }



  ngOnInit() {
    this.getApi();
     }

}
