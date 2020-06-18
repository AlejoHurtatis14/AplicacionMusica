import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  hide: boolean = false;

  constructor(
    private dataBase: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private loginService: LoginService
  ) {
    this.fireAuth.authState.subscribe(user => {
      console.log("User ", user);
      if (user) {
        console.log("User 2 ", user);
      }
    });
  }

  ngOnInit(): void { }

  executeLogin(type) {
    this.loginService.loginUser(type);
  }

  logOut() {
    this.loginService.logOut();
  }

}
