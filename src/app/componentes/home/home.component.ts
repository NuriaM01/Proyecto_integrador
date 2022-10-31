import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datos: any;

  constructor(private httpClient: HttpClient) {
    this.datos = {};
  }

  ngOnInit() {
    this.httpClient.get("/assets/datos/porfolio.json").subscribe(respuesta => {
      this.datos = respuesta;
    });
  }

}


