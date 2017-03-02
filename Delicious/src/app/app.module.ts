import { RecipeSearchComponent } from './recipe-search/recipe-search.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FoodService} from "./services/food.service";
import { RecipeComponent } from './recipe/recipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar-2/navbar-2.component';
import { FooterComponent } from './footer/footer.component';
import { Navbar3Component } from './navbar-3/navbar-3.component';
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import { FridgeComponent } from './fridge/fridge.component';
import { OwnComponent } from './own/own.component';
import { RandomComponent } from './random/random.component';

const menuConfig = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component:MainComponent
  }
  ,
  {
    path: 'fridge',
    component: FridgeComponent
  },
  {
    path: 'search',
    component: RecipeSearchComponent
  },
   {
    path: 'own',
    component: OwnComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    NavbarComponent,
    Navbar2Component,
    FooterComponent,
    Navbar3Component,
    MainComponent,
    FridgeComponent,
    RecipeSearchComponent,
    OwnComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(menuConfig)
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
