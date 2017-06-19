import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() navClicked = new EventEmitter<string>();

    onSelect(view: string){
        this.navClicked.emit(view)
    }

}
