import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'; // New httpClient
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService) {}

  storeRecipes() {

    // Constructing custom http requests incl. responding to progress
    const req = new HttpRequest(
      'PUT',
      'https://nutrition-app-72230.firebaseio.com/recipes.json',
      this.recipeService.getRecipes(), 
      {
        reportProgress: true,
      }
    );

    return this.httpClient.request(req);

  // Alternative Approach:
  //   return this.httpClient.put('https://nutrition-app-72230.firebaseio.com/recipes.json', 
  //     this.recipeService.getRecipes(),
  //     {
  //       observe: 'body', // Listen to event also possible, or getting full response,
  //       // headers: new HttpHeaders().set('Authorization', 'as34asdset34').append('another custom header')
  //       params: new HttpParams().set('auth', token)
  //     }
  //   );

  }

  getRecipes() {
    // New httpClient module at work: Typed responses (being explicit about which data to expect)
    this.httpClient.get<Recipe[]>('https://nutrition-app-72230.firebaseio.com/recipes.json',
      {
        observe: 'body',
        responseType: 'json'
      })
      .map(
        (recipes) => { // No manually extraction of data from the reponse body anymore
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}