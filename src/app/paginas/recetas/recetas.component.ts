import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas : Array<any>;
  recetaSeleccionada: any;
  checkGluten: boolean;
  busqueda: string;

  constructor() { 
    console.trace('RecetasComponent Constructor');
    this.recetas = RECETAS;
    this.checkGluten = false;
    this.busqueda = '';
  } // Constructor

  ngOnInit() {
    console.trace('RecetasComponent ngOnInit');
  } // ngOnInit

} // RecetasComponent
