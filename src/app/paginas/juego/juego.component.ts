import { Component, OnInit } from '@angular/core';

const TIEMPO_JUEGO = 2000;

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  titulo: string;
  jugador: string;
  numeroClicks: number;
  ranking: Map<string, number>;
  isDisabled: boolean;

  constructor() { 
    console.trace('JuegoComponent constructor');
    this.titulo = 'Welcome to the Jungle';
    this.jugador = '';
    this.numeroClicks = 0;
    this.ranking = new Map();
    this.isDisabled = true;
  } // Constructor

  ngOnInit() {
    console.trace('JuegoComponent ngOnInit');
  } // ngOnInit

  habilitarJuego() {
    console.trace('habilitarJuego');
    this.isDisabled = !this.isDisabled;
  } // habilitarJuego

  contarClicks() {
    console.trace('contarClicks');
    this.numeroClicks++;
  } // contarClicks

}
