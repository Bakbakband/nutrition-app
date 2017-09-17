import { Component } from '@angular/core';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
	constructor(
		private dataStorageService: DataStorageService,
		private authService: AuthService
	) {}

	onSave() {
		this.dataStorageService.storeRecipes().subscribe(
			(response) => console.log(response),
			(error: Response) => console.log(error)
		);
	}

	onFetch() {
		this.dataStorageService.getRecipes();
	}

	onLogout() {
		this.authService.logout();
	}

	isAuthenticated() {
		return this.authService.isAuthenticated();
	}

}
