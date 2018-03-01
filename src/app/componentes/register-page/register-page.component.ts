import { Component, OnInit } from '@angular/core';

import {AutorizarService} from '../../servicios/autorizar.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public email: string;
  public pass: string;
  constructor(
    public autorizarServicio: AutorizarService,
    public router: Router,
    public flashMensaje: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.autorizarServicio.registroUsuario(this.email, this.pass)
    .then((res) => {
      // Notificar éxito
      this.flashMensaje.show('Usuario Creado correctamente!',
      {cssClass: 'alert-success', timeout : 4000} );
      this.router.navigate(['/private']);
    } ).catch((err) => {
      // Notificar Error
      if (err.code === 'auth/email-already-in-use') {
        this.flashMensaje.show('El correo ' + this.email + ' ya existe, Pruebe con otra cuenta',
        {cssClass: 'alert-danger', timeout : 4000} );
      } else {
        this.flashMensaje.show(err.message,
        {cssClass: 'alert-danger', timeout : 4000} );
      }
      console.log(err);
    });
  }

}
