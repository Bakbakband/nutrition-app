import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  	selector: 'app-shopping-edit',
  	templateUrl: './shopping-edit.component.html',
  	styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

	// Maken nameinput & amount input available to parent component
	// Use element reference to access native DOM element
	// Dangerous because of XSS
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;

  	constructor(private shoppingListService: ShoppingListService) { }

  	ngOnInit() {
  	}

  	onAddItem() {

  		// Constances declared because they're only declared one time
  		// declare constants if they're not changed
  		const ingName = this.nameInputRef.nativeElement.value;
  		const ingAmount = this.amountInputRef.nativeElement.value;
  		const newIngredient = new Ingredient(ingName, ingAmount);
      this.shoppingListService.addIngredient(newIngredient);
  	}

}
