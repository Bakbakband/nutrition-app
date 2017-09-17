import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

// Initial state to start out with
const initialState = {
    ingredients: [
        new Ingredient('Ham', 4),
        new Ingredient('Cheese', 3)
    ]
};

// Reducer takes two arguments: State and what to do
export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    
    // State to replace/update old one with
    switch(action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {

                // spread operator, so old properties get added to new object
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        default:
            return state;
    }
}