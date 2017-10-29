// Main TS File vor SSR
import { enableProdMode } from '@angular/core'; // Enables Prod mode

// Tell server where to find module to work with
export { AppServerModule } from './app/app.server.module';

enableProdMode();