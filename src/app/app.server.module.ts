// Module used for SSR
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// 'Simplified' App Module without state management vor SSR
@NgModule({
    imports: [
        AppModule,
        ServerModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {}