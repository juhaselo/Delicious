import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map'; // Tämä täytyy tehdä käsin

@Injectable()
export class FoodService {

  private url: string = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/';
  private ingredients: string = '';
  private search: string = '';

  constructor(private http: Http) {
  }

  getRecipe = (tyyppi: string) => {

    const params: URLSearchParams = new URLSearchParams();
    let seppo: string = '';
    switch (tyyppi) {
      case ('aine'):
        params.set('fillIngredients', 'false');
        params.set('ingredients', this.ingredients);
        params.set('limitLicense', 'true');
        params.set('number', '100');
        params.set('ranking', '1');
        seppo = 'findByIngredients';
        break;
      case ('nimi'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '25');
        params.set('offset', '0');
        params.set('query', this.search);
        params.set('type', '');
        seppo = 'search';
        break;
    }
    const headers = new Headers({
      'X-Mashape-Key': 'ZEFA47mm54msh2oKbvCiBb4ab9vlp1m6MKjjsnBXRw7vpYgGWB'
    });

    const options = new RequestOptions({headers: headers, search: params});


    return this.http.get(this.url + seppo, options)
      .map(
        (res: Response) => res.json()
      );
  };

  setIngredients = (aineet: string) => {
    this.ingredients = aineet;
  }

  setSearch = (haku: string) => {
    this.search = haku;
    console.log(this.search);
  }

}
