// Main App Module

// ng module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Custom compontent imports
import { AppComponent } from './app.component';

// Service imports
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

// Routing module import
import { AppRoutingModule } from './app-routing.module';

// Shared module import
import { SharedModule } from './shared/shared.module';

// Feature module import
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    AuthModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    DataStorageService,
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
