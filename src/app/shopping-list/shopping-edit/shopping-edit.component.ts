import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

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
	@Output() ingredientAdded = new EventEmitter<Ingredient>();


  	constructor() { }

  	ngOnInit() {
  	}

  	onAddItem() {

  		// Constances declared because they're only declared one time
  		// declare constants if they're not changed
  		const ingName = this.nameInputRef.nativeElement.value;
  		const ingAmount = this.amountInputRef.nativeElement.value;
  		const newIngredient = new Ingredient(ingName, ingAmount);
  		this.ingredientAdded.emit(newIngredient);
  	}

}
