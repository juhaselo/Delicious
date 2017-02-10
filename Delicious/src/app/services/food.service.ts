import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map'; // Tämä täytyy tehdä käsin

@Injectable()
export class FoodService {

  private url: string = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/';

  constructor(private http: Http) {
  }

  getRecipe = (aineet: string) => {

    const params: URLSearchParams = new URLSearchParams();
    params.set('fillIngredients', 'false');
    params.set('ingredients', aineet);
    params.set('limitLicense', 'false');
    params.set('number', '5');
    params.set('ranking', '1');

    const headers = new Headers({
      'X-Mashape-Key': 'ZEFA47mm54msh2oKbvCiBb4ab9vlp1m6MKjjsnBXRw7vpYgGWB'
    });

    const options = new RequestOptions({ headers: headers, search: params });


    return this.http.get(this.url+'findByIngredients', options)
      .map(
        (res: Response) =>  res.json()
      );
  }


}
