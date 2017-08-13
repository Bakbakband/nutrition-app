import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
	// Event to be emitted when ingredient list is changed
	ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

	private ingredients: Ingredient[] = [
        new Ingredient('Ham', 4),
        new Ingredient('Cheese', 3)
    ];

    getIngredients() {
    	return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredient) {
    	this.ingredients.push(ingredient);

    	// Emitting event when ingredients list is changed
    	this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {

        // ECMAt 2016 spread operator converts array into list
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}