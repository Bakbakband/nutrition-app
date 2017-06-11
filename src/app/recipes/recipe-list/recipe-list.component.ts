import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is only a test', 'https://c1.staticflickr.com/1/606/21760756478_396b629fcf_b.jpg'),
        new Recipe('Another Test', 'This is another test', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pizza_with_tomatoes.jpg')
    ];

    constructor() {

    }

    ngOnInit() {

    }
}
