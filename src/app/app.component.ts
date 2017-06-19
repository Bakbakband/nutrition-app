import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    loadedView = 'recipes';

    onNavClicked(navElement: string) {
        this.loadedView = navElement;
    }
}
