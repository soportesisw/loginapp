import { Component, OnInit } from '@angular/core';
import {AutorizarService} from '../../servicios/autorizar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public pass: string;
  constructor(
    public autorizarService: AutorizarService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.autorizarService.loginEmail(this.email, this.pass)
    .then((res) => {
        this.router.navigate(['/private']);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

}
