import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  editando: boolean[] = [];

  @Input() datos: any;

  constructor() { }

  ngOnInit() {
  }

}
