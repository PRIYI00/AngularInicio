import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

  nombre: string;

  constructor(private route: ActivatedRoute) { 
    console.trace('SaludarComponent Constructor');
    this.nombre = '';
    this.route.params.subscribe(el => this.nombre = el['pNombre']);
  } // Constructor

  ngOnInit() {
    console.trace('SaludarComponent ngOnInit');
  } // ngOnInit

} // SaludarComponent
