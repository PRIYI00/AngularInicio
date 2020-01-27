import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  frutas: any;

  constructor() {
    console.trace('ArraysComponent Constructor');
    this.frutas = [
      {"nombre": "fresa", "precio": 2.45},
      {"nombre": "pera", "precio": 3.45},
      {"nombre": "manzana", "precio": 1.45},
      {"nombre": "mango", "precio": 5.45}
    ];
  }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');
  }

}
