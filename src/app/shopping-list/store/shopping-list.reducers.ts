import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

// Interface for states that can be implemented by initial state
export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

// Initial state to start out with
const initialState: State = {
    ingredients: [
        new Ingredient('Ham', 4),
        new Ingredient('Cheese', 3)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
};

// Reducer takes two arguments: State and what to do
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {

    // Reducer makes a copy of the last state, modifies it and then returns it
    // Simplest reducer return is a copy of the state without changes through actions
    // Switch statement is used to determine what action is taken
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {

                // spread operator return all properties of old state object while building the new state object
                // spread operator replaces function.apply(null, args) --> function(...args)
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[state.editedIngredientIndex];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients];
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients,
                editedIngredient: null,
                editedIngredientIndex: -1
            };

        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };

        case ShoppingListActions.STOP_EDIT:
       return {
           ...state,
           editedIngredient: null,
           editedIngredientIndex: -1
       }

        default:
            return state;
    }
}
