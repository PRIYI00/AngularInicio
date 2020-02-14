import { Component, OnInit, Output, Input } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

  frutas: Array<Fruta>;
  frutaSeleccionada: Fruta;

  constructor() { 
    console.debug('ComprasComponet Constructor');
    this.frutas = [];
    this.frutas.push(new Fruta('pera'));
    this.frutas.push(new Fruta('manzana'));
    this.frutas.push(new Fruta('mango'));
    this.frutas.push(new Fruta('mandarina'));
    this.frutaSeleccionada = new Fruta();
  } // Constructor

  ngOnInit() {
    console.debug('ngOnInit ComprasComponent');
  } // ngOnInit

  recogerEvento(event) {
    console.debug('Recoger Evento en el Padre');
    this.frutaSeleccionada = event;
  }

} // ComprasComponent
