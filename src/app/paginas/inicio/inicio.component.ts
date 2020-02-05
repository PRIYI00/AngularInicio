import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  numeroClicks: number;
  titulo: string;
  visible = false;

  constructor() { 
    console.trace("InicioComponent constructor");
    this.titulo = "Welcome to Hell";
    this.numeroClicks = 0;
  } // constructor

  ngOnInit() {
    console.trace("InicioComponent ngOnInit");
  } // ngOnInit

  contarClicks(){
    console.trace('contarClicks');
    this.numeroClicks++;
  } // contarClicks

  decirAdios() {
    console.trace('decirAdios');
    this.visible = true;
  } // decirAdios

} // InicioComponent
