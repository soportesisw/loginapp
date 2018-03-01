import { Component, OnInit } from '@angular/core';
import {AutorizarService} from '../../servicios/autorizar.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


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
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.autorizarService.loginEmail(this.email, this.pass)
    .then((res) => {
        this.flashMensaje.show('Ingreso exitoso.', {cssClass: 'alert-success', timeout: 4000});
        this.router.navigate(['/private']);
    }).catch((err) => {
      this.flashMensaje.show('Ingreso Erróneo.' + err.message, {cssClass: 'alert-danger', timeout: 4000});
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  loginGoogle() {
    this.autorizarService.conGoogle()
    .then((res) => {
      this.router.navigate(['/private']);
    }).catch(err => console.log(err.message));
  }

}
