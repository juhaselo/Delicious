
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
  private christmas: string = '';
  private halloween: string = '';
  private easter: string = '';
  private newyear: string = '';
  private valentine: string = '';
  private patrick: string = '';
  private thanksgiving: string = '';


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
      case ('xmas'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'christmas');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('pumpkin'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'halloween');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('bunny'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'easter');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('year'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'new year');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('valday'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'valentine');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('patricks'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'patrick');
        params.set('type', '');
        seppo = 'search';
        break;
      case ('thanks'):
        params.set('cuisine', '');
        params.set('diet', '');
        params.set('excludeIngredients', '');
        params.set('instructionsRequired', 'false');
        params.set('intolerances', '');
        params.set('limitLicense', 'false');
        params.set('number', '24');
        params.set('offset', '0');
        params.set('query', 'thanksgiving');
        params.set('type', '');
        seppo = 'search';
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
  setChristmas = (xmas: string) => {
    this.christmas = xmas;
  }
  setHalloween = (hween: string) => {
    this.halloween = hween;
  }
  setEaster = (easterr: string) => {
    this.easter = easterr;
  }
  setNewyear = (newy: string) => {
    this.newyear = newy;
  }
  setValentine = (val: string) => {
    this.valentine = val;
  }
  setPatrick = (pat: string) => {
    this.patrick = pat;
  }
  setThanksgiving = (ty: string) => {
    this.thanksgiving = ty;
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
