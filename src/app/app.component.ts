import { Component, OnInit } from '@angular/core';
import * as firebase  from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
  title = 'Instagram'

  ngOnInit(): void{

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBiSVAIcpOoCd-1-EsjMbWuzgW8nAMyN-Y",
    authDomain: "instagram-c254b.firebaseapp.com",
    projectId: "instagram-c254b",
    storageBucket: "instagram-c254b.appspot.com",
    messagingSenderId: "662833096777",
    appId: "1:662833096777:web:c9704957de5c732f8bf798",
    measurementId: "G-91W9BZQ1N9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  }

}
