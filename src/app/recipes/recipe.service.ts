import { Recipe } from './recipe.model';

export class RecipeService {
	private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is only a test', 'https://c1.staticflickr.com/1/606/21760756478_396b629fcf_b.jpg'),
        new Recipe('Another Test', 'This is another test', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg')
    ];

    getRecipes() {
    	// Returns new array --> copy from recipes array stored here
    	return this.recipes.slice();
    }
}