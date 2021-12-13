// import { Injectable } from '@angular/core';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RecipeService {

  // recipeSelected = new EventEmitter<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2560%2Cc_limit/0621-Sheet-Pan-Gnocchi.jpg',[
  //     new Ingredient('Meat',1),
  //     new Ingredient('French Fries',20)
  //   ]),
  //   new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2560%2Cc_limit/0621-Sheet-Pan-Gnocchi.jpg',[
  //     new Ingredient('Buns', 2),
  //     new Ingredient('Meat',1),
  //   ])
  // ];

  private recipes: Recipe[] = [];
  
  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

}
