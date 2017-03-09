
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map'; // Tämä täytyy tehdä käsin

@Injectable()
export class FoodService {

  private url: string = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/';
  private ingredients: string = '';
  private search: string = '';

  private diet: string;
  private intolerances: string;
  private exludeIngredients: string;
  private cuisine: string;
  private foodtype: string;
  private random: string = '';
  private holiday: string = '';


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
        params.set('number', '24');
        params.set('ranking', '1');
        seppo = 'findByIngredients';
        break;
      case ('nimi'):
        params.set('cuisine', this.cuisine);
        params.set('diet', this.diet);
        params.set('excludeIngredients', this.exludeIngredients);
        params.set('instructionsRequired', 'false');
        params.set('intolerances', this.intolerances);
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', this.search);
        params.set('type', this.foodtype);
        seppo = 'search';
        break;
      case ('randomi'):
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('tags', '');
        seppo='random';
        break;
      case ('holiday'):
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('tags', 'christmas');
        seppo='random';
        break;
      case ('glutenfree'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'gluten-free');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('healthy'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'healthy');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('lactosefree'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'dairy-free');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('paleo'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'paleo');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('fatfree'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'fat-free');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('sugarfree'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'sugar-free');
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

  setRandom = (satunnainen: string) => {
    this.random = satunnainen;
    console.log(this.random);
  }
  setHoliday = (loma: string) => {
    this.holiday = loma;
    console.log(this.holiday);
  }
  setGlutenfree = (glutenfree: string) => {
    this.holiday = glutenfree;

  }
  setHealthy = (healthy: string) => {
    this.holiday = healthy;

  }
  setSLactosefree = (lactosefree: string) => {
    this.holiday = lactosefree;

  }
  setPaelo = (paleo: string) => {
    this.holiday = paleo;
  }

  setFatfree = (fatfree: string) => {
    this.holiday = fatfree;
  }

  setSugarfree = (sugarfree: string) => {
    this.holiday = sugarfree;
  }


}
