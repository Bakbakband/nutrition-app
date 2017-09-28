// Global Applicatin Wide Reducer
// State that bundles all the other application states

// ngrx imports
import { ActionReducerMap } from '@ngrx/store';

// Custom imports
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
    shoppingList: fromShoppingList.State,
    auth: fromAuth.State
}

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
  };