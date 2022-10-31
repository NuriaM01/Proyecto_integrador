import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  editando: boolean[] = [];

  @Input() datos: any;

  constructor() { }

  ngOnInit() {
  }

}
