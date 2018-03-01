import { Component, OnInit } from '@angular/core';

import {AutorizarService} from '../../servicios/autorizar.service';
import {Router} from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.autorizarServicio.registroUsuario(this.email, this.pass)
    .then((res) => {
      this.router.navigate(['/private']);
    } ).catch((err) => {
      console.log(err);
    });
  }

}
