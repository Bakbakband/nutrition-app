// Recipe Feature Module

// ng module imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Custom component imports
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { recipeReducer } from './store/recipe.reducers';
import { RecipeEffects } from './store/recipe.effects';

// Feature Routes
import { RecipesRoutingModule } from './recipes-routing.module';

// Shared Module
import { SharedModule } from '../shared/shared.module';

// Ngrx imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
	declarations: [
		RecipesComponent,
		RecipeStartComponent,
		RecipeListComponent,
		RecipeEditComponent,
		RecipeDetailComponent,
		RecipeItemComponent
	],
	imports: [
		CommonModule,
    	ReactiveFormsModule,
    	RecipesRoutingModule,
		SharedModule,
		StoreModule.forFeature('recipes', recipeReducer), // Dynamicall state injection when module is loaded 
		EffectsModule.forFeature([RecipeEffects])
	]
})
export class RecipesModule {}
