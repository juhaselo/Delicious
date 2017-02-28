import { Injectable } from '@angular/core';
import {Http, Headers, URLSearchParams, RequestOptions, Response} from "@angular/http";

@Injectable()
export class MainpageService {

  private url: string = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';

  constructor(private http: Http) { }


  getContend = () => {

    const params: URLSearchParams = new URLSearchParams();
    params.set('limitLicense', 'false');
    params.set('number', '26');
    params.set('tags', '');

    const headers = new Headers({
      'X-Mashape-Key': 'ZEFA47mm54msh2oKbvCiBb4ab9vlp1m6MKjjsnBXRw7vpYgGWB'
    });

    const options = new RequestOptions({headers: headers, search: params});


    return this.http.get(this.url + 'random')

      .map(
        (res: Response) => res.json()
      );
  };



}
