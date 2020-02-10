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
  tituloNuevo: string;
  tareaEliminada: Tarea;
  mensaje: boolean;

  constructor(private servicioTarea: TareasService) { 
    console.trace('Constructor TareasComponent');
    this.tareas = []; // Inicializar el Array.
    this.tituloNuevo = '';
  } // Constructor

  ngOnInit() {
    console.trace('ngOnInit TareasComponent');
    this.cargarTareas();
  } // ngOnInit

  editarEstado(tarea: Tarea){
    console.debug('Click %o ', tarea);
    tarea.completada = !tarea.completada;

    this.servicioTarea.modificar(tarea).subscribe(() => {
        console.debug('Modificar en TareasComponent %o ', tarea);
        this.cargarTareas()
      }
    );
  } // EditarEstado

  eliminarTarea(tarea: Tarea){
    console.debug('Click %o ', tarea);
    if (confirm('¿Estas Seguro?')) {
      console.trace('Confirmado Eliminacion');
      this.servicioTarea.eliminar(tarea.id).subscribe(() => {
          console.debug('Eliminar en TareasComponent %o ', tarea);
          this.tareaEliminada = tarea;
          this.cargarTareas()
        }
      );
    } else {
      console.trace('Cancelado Eliminacion');
    }
  } // EliminarTarea

  /**
   * Llama al Servicio para cargar todas las Tareas.
   * Nos va a servir para refrescar la lista de Tareas.
   */
  private cargarTareas(): void {
    console.trace('CargarTareas Metodo');
    // Llamar al Service para Optener Tareas.
    this.servicioTarea.listar().subscribe(
      datos => {
        console.debug('Esto se Ejecuta de Forma Asincrona.');
        this.tareas = datos
      }
    );
  } // CargarTareas

  nuevaTarea(): void {
    console.debug('Click nueva Tarea %s ', this.tituloNuevo);

    if (this.tituloNuevo && '' !== this.tituloNuevo) {
      this.mensaje = false
      let tareaNueva = new Tarea();
      tareaNueva.titulo = this.tituloNuevo;

      console.debug(tareaNueva);

      this.servicioTarea.crear(tareaNueva).subscribe(dato => {
        console.debug('Crear en TareasComponent una Nueva Tarea %o ', dato);
        this.tituloNuevo = '';
        this.cargarTareas()
        }
      );
    } else {
      this.mensaje = true;
    }
    
  } // NuevaTarea

} // TareasComponent
