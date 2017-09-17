import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

// Unique identifier for the action
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

// Assigning identifier to type and ensuring payload
export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    // Constructor to use
    constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;

    // Constructor to use
    constructor(public payload: Ingredient[]) {}
}

// Bundling action information by defining own export type
// Chain exports with the union type operator
export type ShoppingListActions = AddIngredient | AddIngredients;