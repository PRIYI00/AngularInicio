import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input() frutas: Array<Fruta>;
  @Output() pasameLaFruta = new EventEmitter();

  frutaSeleccionada: Fruta;

  constructor() { 
    console.debug('Constructor de ListadoComponent');
    this.frutas = new Array<Fruta>();
    this.frutaSeleccionada = new Fruta();
  } // Contructor

  ngOnInit() {
    console.debug('ngOnInit de ListadoComponent');
  } // ngOnInit

  lanzar(event, fruta) {
    console.debug('Lanzar Evento al Padre');
    this.frutaSeleccionada = fruta;
    this.pasameLaFruta.emit(this.frutaSeleccionada);
  } // Lanzar

} // ListadoComponent
