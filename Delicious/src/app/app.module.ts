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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";


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
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

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
    LoginComponent,
    RegisterComponent,
    MainComponent
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
