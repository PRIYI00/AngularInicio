import { Component, OnInit } from '@angular/core';
import { ANIMALES } from '../../animales';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche: any;
  animales: Array<any>;
  soloTipos: Array<string>;
  tipo: string;

  constructor() { 
    console.trace('constructor FiltrosComponent');
    this.animales = ANIMALES;
    this.tipo = 'TODOS';
    this.coche = {
                      "nombre": "Audi r8",
                      "color": "blanco",
                      "isDiesel": false,
                      "precio": 100000.456
                  };
    this.soloTipos = [...new Set(this.animales.map(elemento => elemento.Tipo))];
  } // Constructor

  ngOnInit() {
    console.trace('ngOnInit FiltrosComponent');
  } // ngOnInit

} // FiltrosComponent
