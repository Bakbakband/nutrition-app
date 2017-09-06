import { NgModule } from '@angular/core';

// Components & Module imports
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

// Service imports
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
	declarations: [
		HeaderComponent,
		HomeComponent
	],
	imports: [
		SharedModule,
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [
    	AuthService,
    	DataStorageService,
    	ShoppingListService,
    	RecipeService
	]
})
export class CoreModule {}