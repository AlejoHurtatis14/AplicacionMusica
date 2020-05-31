import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  execute() {
    this.httpClient.get('https://accounts.google.com/o/oauth2/v2/auth?client_id=719003813794-uvajjr2mg6q55ml0jakouko0hj78s4hn.apps.googleusercontent.com&redirect_uri=https://localhost:4200/&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email').subscribe(resp => {
      console.log("respuesta original ", resp);
    }, errro => {
      console.log("Error ", errro);
    })
  }

}
