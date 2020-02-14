import { Component, OnInit, Input } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input() fruta: Fruta;

  constructor() { 
    console.debug('Constructor de DetalleComponent');
    //this.fruta = new Fruta();
    //this.fruta.nombre = 'Frutas';
  } // Constructor

  ngOnInit() {
    console.debug('ngOnInit DetalleComponent');
  } // ngOnInit

} // DetalleComponent
