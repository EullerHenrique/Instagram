import { Component, OnInit } from '@angular/core';
import { firebase } from '@firebase/app'



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
   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBiSVAIcpOoCd-1-EsjMbWuzgW8nAMyN-Y",
    authDomain: "instagram-c254b.firebaseapp.com",
    databaseURL: "https://instagram-c254b-default-rtdb.firebaseio.com",
    projectId: "instagram-c254b",
    storageBucket: "instagram-c254b.appspot.com",
    messagingSenderId: "662833096777",
    appId: "1:662833096777:web:99e6c9644876ad168bf798",
    measurementId: "G-KE9YQQ4TBT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  }

}
