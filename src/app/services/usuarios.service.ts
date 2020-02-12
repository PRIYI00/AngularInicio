import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService implements IUsuarioService {

  private isLogged: boolean;
  private usuario: Usuario;

  constructor() { 
    console.trace('UsuariosService Constructor');
    this.isLogged = false;
    this.usuario = undefined;
  } // Constructor

  estaLogeado(): boolean {
    console.trace('UsuarioService estaLogeado');
    return this.isLogged;
  }

  login(nombre: string, password: string): Usuario {
    console.trace('UsuariosService Login nombre %s password %s', nombre, password);
    const NOMBRE = 'admin';
    const PASS = 'admin123';

    let usuarioBuscar: Usuario;

    if (NOMBRE === nombre && PASS === password) {
      console.trace('Usuario Encontrado.');
      // Crear Usuario.
      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id = 99;
      // Marcar que esta Logeado.
      this.isLogged = true;
    } else {
      console.trace('Usuario no Encontrado.');
      this.isLogged = false;
    }

    return usuarioBuscar;
  } // Login

  cerrarSesion() {
    console.trace('Metodo Cerrar Sesion UsuarioService');
    this.isLogged = false;
  }
} // UsuariosService
