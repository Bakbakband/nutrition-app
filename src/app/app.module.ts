// Main App Module

// ng module imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

// Ngrx module imports & Reducers & Effects
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/app.reducers';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Importing environment variable to only run devtools in dev env
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'universal-app'}), // Used for SSR Rendering
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    AuthModule,
    SharedModule,
    ShoppingListModule,
    StoreModule.forRoot(reducers), //Registers reducers from main app reducer
    EffectsModule.forRoot([AuthEffects]), // Register Auth effects
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [] // Redux DevTools 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
