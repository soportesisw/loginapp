import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AutorizarService {

  constructor(
    // inyectamos AngularfireAuth en el constructor
    public afAuth: AngularFireAuth
  ) { }

  // Construir los métodos para inyectarlos en los componentes

// M´todo de registro
registroUsuario(email: string, pass: string) {
  return new Promise((resolve, reject) => {
    this.afAuth.auth.createUserWithEmailAndPassword(email, pass).
    then(userData => resolve(userData),
  err => reject (err));
  });
}

  // Método de Login
  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass).
      then(userData => resolve(userData),
    err => reject (err));
    });
  }

  // Método obtener datos del usuario
  obtenerDatosUsuario() {
    return this.afAuth.authState.map (auth => auth);
  }

// M´todo de logout
  logOut() {
    return this.afAuth.auth.signOut();
  }
}
