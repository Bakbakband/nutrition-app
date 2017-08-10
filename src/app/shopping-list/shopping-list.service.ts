import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
	// Event to be emitted when ingredient list is changed
	ingredientsChanged = new Subject<Ingredient[]>();

	private ingredients: Ingredient[] = [
        new Ingredient('Ham', 4),
        new Ingredient('Cheese', 3)
    ];

    getIngredients() {
    	return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
    	this.ingredients.push(ingredient);

    	// Emitting event when ingredients list is changed
    	this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {

        // ECMAt 2016 spread operator conversts array into list
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}