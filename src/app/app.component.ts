import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedView = 'recipes';

    ngOnInit() {
    	firebase.initializeApp({
    		apiKey: "AIzaSyCiv76nccwOPhS1MX4yY7PWGqeZVTufJpo",
    		authDomain: "nutrition-app-72230.firebaseapp.com"
    	});
    }

    onNavClicked(navElement: string) {
        this.loadedView = navElement;
    }
}
