import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	constructor(
		private dataStorageService: DataStorageService,
		private authService: AuthService
	) {}

	onSave() {
		this.dataStorageService.storeRecipes().subscribe(
			(response: Response) => console.log(response),
			(error: Response) => console.log(error)
		);
	}

	onFetch() {
		this.dataStorageService.getRecipes();
	}

	onLogout() {
		this.authService.logout();
	}

}
