import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';
 
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;

  constructor(private servicioTarea: TareasService) { 
    console.trace('Constructor TareasComponent');
    this.tareas = []; // Inicializar el Array.
  } // Constructor

  ngOnInit() {
    console.trace('ngOnInit TareasComponent');
    // Llamar al Service para Optener Tareas.
    this.servicioTarea.listar().subscribe(
      datos => {
        console.debug('Esto se Ejecuta de Forma Asincrona.');
        this.tareas = datos
      }
    );
  } // ngOnInit

} // TareasComponent
