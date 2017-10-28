import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import { Store } from '@ngrx/store';


import * as RecipeActions  from '../store/recipe.actions';
import { Recipe } from '../recipe.model';
import * as fromRecipe from '../store/recipe.reducers';

@Injectable()
export class RecipeEffects {

    // Fetching recipes from the server
    @Effect()
    recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
        return this.httpClient.get<Recipe[]>('https://nutrition-app-72230.firebaseio.com/recipes.json',
        {
          observe: 'body',
          responseType: 'json'
        })
    })
    .map(
        (recipes) => { // No manually extraction of data from the reponse body anymore
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return {
              type: RecipeActions.SET_RECIPES,
              payload: recipes
          };
        }
      );

    // Storing recipes on server
    @Effect({dispatch: false})
    recipeStore = this.actions$
      .ofType(RecipeActions.STORE_RECIPES)
      .withLatestFrom(this.store.select('recipes'))
      .switchMap(([action, state]) => {
        const req = new HttpRequest(
            'PUT',
            'https://nutrition-app-72230.firebaseio.com/recipes.json',
            state.recipes, 
            {
              reportProgress: true,
            }
          );
      
          return this.httpClient.request(req);
      });

    

    constructor(
        private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<fromRecipe.RecipeState>) {}
}