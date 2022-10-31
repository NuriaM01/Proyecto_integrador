import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-mi-cabecera',
  templateUrl: './mi-cabecera.component.html',
  styleUrls: ['./mi-cabecera.component.css']
})
export class MiCabeceraComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  irAFacebook(): void {
    window.location.href = "https://www.facebook.com/";
  }

  irAInstagram(): void {
    window.location.href = "https://www.instagram.com/";
  }

  irAGithub(): void {
    window.location.href = "https://www.github.com/";
  }

  doLogin(): void {
    this.router.navigate(["login"]);
  }

  doLogout(): void {
    this.loginService.isLoggedIn = false;
  }
}
