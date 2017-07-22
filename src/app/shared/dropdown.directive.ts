// Custom directive that can be added to the elements that toggle the dropdowns on click
// Replaces bootstrap JS to toggle dropdown to handle everything within angular

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {
	@HostBinding('class.open') isOpen = false;

	@HostListener('click') toggleOpen() {
		this.isOpen = !this.isOpen;
	}
}