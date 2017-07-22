import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	// Event to be emitted when ingredient list is changed
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
        new Ingredient('Ham', 4),
        new Ingredient('Cheese', 3)
    ];

    getIngredients() {
    	return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
    	this.ingredients.push(ingredient);

    	// Emitting event when ingredients list is changed
    	this.ingredientsChanged.emit(this.ingredients.slice());
    }
}