import { Component, OnInit } from '@angular/core';
import { AutorizarService } from '../../servicios/autorizar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  public fotoUsuario: string;

  constructor(
    public autorizarService: AutorizarService
    ) { }

  ngOnInit() {
    // Si hay un usuario Logado
    this.autorizarService.obtenerDatosUsuario().subscribe(auth => {
      if (auth) {
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
        this.fotoUsuario = auth.photoURL;
      } else {
          this.isLogin = false;
      }
    });
  }

  onClickLogOut() {
    this.autorizarService.logOut();
  }
}
