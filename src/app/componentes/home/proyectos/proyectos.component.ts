import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @HostBinding("class") cssClass: string = "d-inline-block";

  constructor() { }

  ngOnInit() {
  }

}
