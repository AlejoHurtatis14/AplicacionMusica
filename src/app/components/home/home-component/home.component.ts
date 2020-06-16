import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataBase: AngularFirestore, private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe(user => {
      console.log("User ", user);
      if (user) {
        console.log("User 2 ", user);
      }
    });
  }

  ngOnInit(): void { }

  executeLogin() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logOut() {
    this.fireAuth.auth.signOut();
  }

}
