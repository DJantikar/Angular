import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp(
      {
      apiKey: "AIzaSyC4f3tkmY0-0uDgbPE6JCRC7XJ66Xoje44",
      authDomain: "dj-angular-recipe-book.firebaseapp.com"
      }
    );
  }
  title = 'Deepa App';

  featureSelected : string = 'recipe';

  onNavigate(feature:string){

    this.featureSelected=feature;
  }
}
