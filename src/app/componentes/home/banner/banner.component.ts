import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  editandoBanner: boolean = false;
  editandoNombre: boolean = false;
  editandoResumen: boolean = false;

  @Input() datos: any;

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit() {
  }

}
