import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

// Unique identifier for the action
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT ='START_EDIT';
export const STOP_EDIT ='STOP_EDIT';

// Assigning identifier to type and ensuring payload
export class AddIngredient implements Action { // Implements Action type that expects..
    readonly type = ADD_INGREDIENT; // .. readonly type

    // Constructor to use
    constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
    readonly type = UPDATE_INGREDIENT;

    constructor(public payload: {ingredient: Ingredient}) {}
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
    readonly type = START_EDIT;
    
    constructor(public payload: number) {}
}

export class StopEdit implements Action {
    readonly type = STOP_EDIT;
}

// Bundling action information by defining own export type
// Chain exports with the union type operator
export type ShoppingListActions = // type keyword defines own typescript types
    AddIngredient | 
    AddIngredients | 
    UpdateIngredient | 
    DeleteIngredient |
    StartEdit |
    StopEdit;