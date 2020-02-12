import { Component, OnInit } from '@angular/core';
import { RUTA } from '../../ruta';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas : Array<any>;

  constructor(private router: Router, private usuarioService: UsuariosService) { 
    console.trace('NavbarComponent Constructor');
    this.rutas = RUTA;
  } // Constructor

  ngOnInit() {
    console.trace('NavbarComponent ngOnInit');
  } // ngOnInit

  salir() {
    console.trace('NavbarComponent Salir (Cerrar Sesión)');
    const mensaje = '¿Esta seguro que quiere cerrar la sesión?';
    if (confirm(mensaje)) {
      this.usuarioService.cerrarSesion();
      this.router.navigate(['/']); // ir a Inicio
    } else {
      console.trace('Sigue a lo Tuyo');
    }
  } // Salir

} // NavbarComponent
