import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Ingredient } from '../shared/ingredient.model';
import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromApp from '../store/app.reducers';


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    shoppingListState: Observable<{ingredients: Ingredient[]}>; // loads initial state as specified in shoppingList

    // Inject the state store like a normal service
    // store is a generic type, we have to specify the expected state
    constructor(private store: Store<fromApp.AppState>) { }

    ngOnInit() {
        this.shoppingListState = this.store.select('shoppingList'); // this refers to observable 
    }

    onEditItem(index: number) {
        this.store.dispatch(new ShoppingListActions.StartEdit(index));
    }

}
