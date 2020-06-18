import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    // private dataBase: AngularFirestore

    constructor(private fireAuth: AngularFireAuth) {

    }

    loginUser(type) {
        this.fireAuth.auth.signInWithPopup(new firebase.auth[type + 'AuthProvider']())
    }

    logOut() {
        this.fireAuth.auth.signOut();
    }

}