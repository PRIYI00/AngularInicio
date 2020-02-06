import { Component, OnInit } from '@angular/core';

const TIEMPO_JUEGO = 4000;
 
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
  isActivo: boolean;

  constructor() { 
    console.trace('JuegoComponent constructor');
    this.titulo = 'Welcome to the Jungle';
    this.jugador = '';
    this.numeroClicks = 0;
    this.ranking = new Map();
    this.isActivo = false;
  } // Constructor

  ngOnInit() {
    console.trace('JuegoComponent ngOnInit');
  } // ngOnInit

  habilitarJuego() {
    console.trace('habilitarJuego');
    this.isActivo = true;

    setTimeout(() => {
      console.debug('Termina TimeOut');
      this.ranking.set(this.jugador, this.numeroClicks);
      this.isActivo = false;
      this.numeroClicks = 0;
      this.jugador = '';
    }, TIEMPO_JUEGO);
  } // habilitarJuego

  contarClicks() {
    console.trace('contarClicks');
    this.numeroClicks++;
  } // contarClicks

}
