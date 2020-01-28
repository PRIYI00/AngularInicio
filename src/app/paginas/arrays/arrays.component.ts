import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;
  total: number;
  totalDescuento: number;
  aSoloNombres: Array<string>;
  frutasConDescuento: Array<string>;
  primerFrutaVerde: any;

  constructor() {
    console.trace('ArraysComponent Constructor');

    this.total = 0;
    this.totalDescuento = 0;
    this.aSoloNombres = [];
    this.frutasConDescuento = [];
    this.primerFrutaVerde = [];

    this.frutas = [
      {"nombre": "fresa", "precio": 2.45, "descuenta": 0, "colores": ['rojo']},
      {"nombre": "pera", "precio": 3.45, "descuenta": 10, "colores": ['amarillo', 'verde']},
      {"nombre": "manzana", "precio": 1.45, "descuenta": 20, "colores": ['rojo', 'amarillo', 'verde']},
      {"nombre": "mango", "precio": 5.45, "descuenta": 50, "colores": ['rojo', 'amarillo']}
    ];
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');

    // this.frutas.array.forEach(fruta => {this.total += fruta.precio;});
    // this.total = this.frutas.map(elemeto => {return elemento.precio})
    // this.total = this.frutas.reduce((previous, current) => {return previous.precio + current.precio});
    
    // Modo Reducido (Lo de Arriba en una Linea) 
    this.total = this.frutas.map(elemento => elemento.precio).reduce((current, previous) => current + previous);

    this.totalDescuento = this.frutas.reduce((previous, current) => (previous + (current.precio - ((current.precio * current.descuenta) / 100))),0);

    this.aSoloNombres = this.frutas.map(elemento => elemento.nombre);

    this.frutasConDescuento = this.frutas.filter(elemento => elemento.descuenta > 0).map(elemento => elemento.nombre);

    this.primerFrutaVerde = this.frutas.find(f => f.colores.find(c => c === "verde"));
  }

}
