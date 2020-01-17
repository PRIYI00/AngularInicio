import { Component } from '@angular/core';

// Componente Principal que se carga al Arrancar la App.
// Selector: Nombre de la Etiqueta para inyectar componente en HTLML.
// TemplateUrl: Vista del HTML.
// StyleUrls: Estilos para la Vista formato scss.

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Variable
  title = 'AngularApp';
}
