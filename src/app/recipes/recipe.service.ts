import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

	private recipes: Recipe[] = [
        new Recipe(
        	'Burger',
        	'Delicious Burger',
        	'https://c1.staticflickr.com/1/606/21760756478_396b629fcf_b.jpg',
        	[
        		new Ingredient('Beef', 1),
        		new Ingredient('Paddy', 2),
        		new Ingredient('Salad', 2)
        	]
        ),
        new Recipe(
        	'Pizza',
        	'Mouth watering Pizza',
        	'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg',
        	[
        		new Ingredient('Tomato', 3),
        		new Ingredient('Dough', 1),
        		new Ingredient('Salami', 1)
        	]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
    	// Returns new array --> copy from recipes array stored here
    	return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
    	this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}