import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

export interface ITareaService {

    listar(): Observable<Array<Tarea>>;

    detalle(id: number): Observable<Tarea>;

    /**
     * Crear una nueva Tarea.
     * @param tarea Tarea a dar de alta, sin id.
     * @return Retorna un Observable con la Tarea dada de Alta, e ID Actualizado.
     */
    crear(tarea: Tarea): Observable<Tarea>;

    modificar(tarea: Tarea): Observable<Tarea>; 

    eliminar(id: number): Observable<Tarea>; 
}