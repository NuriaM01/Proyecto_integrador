import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  loginError: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.email = "";
    this.password = "";
    this.loginError = false;
  }

  ngOnInit() {
  }

  doLogin(): void {
    if ((this.email === "usuario") && (this.password === "contraseña")) {
      this.loginService.isLoggedIn = true;
      this.loginError = false;
      this.router.navigate([""]);
    } else {
      this.loginError = true;
    }
  }
}
