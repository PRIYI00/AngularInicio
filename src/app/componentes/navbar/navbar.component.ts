import { Component, OnInit } from '@angular/core';
import { RUTA } from '../../ruta';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas : Array<any>;

  constructor() { 
    console.trace('NavbarComponent Constructor');
    this.rutas = RUTA;
  } // Constructor

  ngOnInit() {
    console.trace('NavbarComponent ngOnInit');
  } // ngOnInit

} // NavbarComponent
