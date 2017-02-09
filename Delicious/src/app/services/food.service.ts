import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map'; // Tämä täytyy tehdä käsin

@Injectable()
export class FoodService {

  private url:string='https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/products/classify'

  constructor(private http:Http) { }

  makeFood = (name:string) => {
    let data = `{"title":"Kroger Vitamin A & D Reduced Fat 2% Milk","upc":"","plu_code":""}`;

    let headers = new Headers({ 'X-Mashape-Key': 'ZEFA47mm54msh2oKbvCiBb4ab9vlp1m6MKjjsnBXRw7vpYgGWB','Content-Type': 'application/json','Accept': 'application/json' });


    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, data, options)
      .map(resp => resp.json() );

  }


}
