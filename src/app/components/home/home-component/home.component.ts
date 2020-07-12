import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginService } from 'src/app/shared/services/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

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
    private loginService: LoginService,
    private http: HttpClient
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
    const url = environment.complementoMusixMatch + 'track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=24cfbf9043e212897e8f2927daecb7f0';
    const google = environment.complementoApiGoogle + 'oauth?client_id=719003813794-s9932lepg5rl10q1t3ouevb5doiaublb.apps.googleusercontent.com&redirect_uri=http://localhost:4200&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email';
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Origin': '*',
    //     'Access-Control-Allow-Origin': 'http://127.0.0.1:4200/',
    //     'Accept': 'text/plain',
    //   })
    // };
    // track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc&apikey=24cfbf9043e212897e8f2927daecb7f0
    this.http.get(url).subscribe(respuesta => {
      console.log("respuesta ", respuesta);
    }, error => {
      console.log("Error ", error);
    });
    // this.loginService.loginUser(type);
  }

  logOut() {
    this.loginService.logOut();
  }

}
