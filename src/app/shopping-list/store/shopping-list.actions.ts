import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

// Unique identifier for the action
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

// Assigning identifier to type and ensuring payload
export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    // Constructor to use
    constructor(public payload: Ingredient) {}
}

// Bundling action information by defining own export type
export type ShoppingListActions = AddIngredient;