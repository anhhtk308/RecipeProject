import { HttpClient } from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://angular-udemy-2021-3a5b7-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchRecipes(){
    return this.http.get<Recipe[]>('https://angular-udemy-2021-3a5b7-default-rtdb.firebaseio.com/recipes.json').pipe(
      map(recipes =>{
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        });
      }),
      tap(
        recipes => {
          this.recipeService.setRecipes(recipes);
        }
      )
    );
  }

}
