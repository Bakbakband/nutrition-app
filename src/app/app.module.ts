// Main App Module

// ng module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Custom compontent imports
import { AppComponent } from './app.component';

// Routing module import
import { AppRoutingModule } from './app-routing.module';

// Shared module import
import { SharedModule } from './shared/shared.module';

// Feature module import
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';


// Ngrx module imports & Reducers
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    SharedModule,
    ShoppingListModule,
    StoreModule.forRoot(reducers) //Registers reducers from main app reducer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
