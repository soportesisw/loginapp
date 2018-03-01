import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import {AngularFireAuth} from 'angularfire2/auth';
import {AutorizarService} from '../servicios/autorizar.service';

@Injectable()
export class GuardiaGuard implements CanActivate {

  // Inyectar las importaciones
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private autorizarService: AutorizarService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // comprobar si el usuario no está autenticado se redirecciona a login
    return this.autorizarService.afAuth.authState
    .take(1)
    .map(authState => !! authState)
    .do(autenticado => {
      if (!autenticado) {
        this.router.navigate(['/login']);
      }
    });
  }
}
