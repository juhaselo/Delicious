import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FoodService} from "./services/food.service";
import { RecipeComponent } from './recipe/recipe.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar-2/navbar-2.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar3Component } from './navbar-3/navbar-3.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

/*
const recipeConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mainpage'
  },
  {
    path: 'search',
    component:
  },
  {
    path: 'fridge',
    component:
  },

 {
 path: 'list',
 component:
 },
 {
 path: 'login',
 component:
 },

 {
 path: 'register',
 component:
 }

  ]; */
 /* mainpage search fridge list register login */



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientsComponent,
    NavbarComponent,
    Navbar2Component,
    FooterComponent,
    Navbar3Component,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }



