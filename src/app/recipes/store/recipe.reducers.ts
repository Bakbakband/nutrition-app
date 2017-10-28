import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

// Export to register lazily loaded module state with global app state
export interface RecipeState extends fromApp.AppState{
    recipes: State
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
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
    ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
	switch(action.type) {
		case (RecipeActions.SET_RECIPES):
			return {
				...state,
				recipes: [...action.payload]
			};
		case (RecipeActions.ADD_RECIPE):
			return {
				...state,
				recipes: [...state.recipes, action.payload]
			};
		case (RecipeActions.UPDATE_RECIPE):
			const recipe = state.recipes[action.payload.index];
			const updatedRecipe = {
				...recipe,
				...action.payload.updatedRecipe
			};
			const recipes = [...state.recipes];
			recipes[action.payload.index] = updatedRecipe;
			return {
				...state,
				recipes: recipes
			};
		case (RecipeActions.DELETE_RECIPE):
			const oldRecipes = [...state.recipes];
			oldRecipes.splice(action.payload, 1);
			return {
				...state,
				recipes: oldRecipes
			};
		default:
			return state
	}
}