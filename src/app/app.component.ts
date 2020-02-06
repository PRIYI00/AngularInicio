import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app/global';

// Componente Principal que se carga al Arrancar la App.
// Selector: Nombre de la Etiqueta para inyectar componente en HTLML.
// TemplateUrl: Vista del HTML.
// StyleUrls: Estilos para la Vista formato scss.

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // Variable
  title : string;
  global : Array<any>;

  constructor() { 
    console.trace('constructor AppComponent');
	  this.title = 'AngularApp';
	  this.global = GLOBAL;
  } // Constructor

  ngOnInit() {
    console.trace('ngOnInit FiltrosComponent');
  } // ngOnInit

} // AppComponent
