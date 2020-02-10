import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITareaService } from './Itareas.service';
import { Observable } from "rxjs";
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService implements ITareaService{
  
  constructor(private http: HttpClient) { 
    console.trace('Constructor TareasService');
  } // Constructor

  listar(): Observable<Tarea[]> {
    const url = `http://localhost:3000/tareas`;

    console.debug(`GET ${url}`);
    console.trace("TareasService listar " + url);

    return this.http.get<Tarea[]>(url);
  } // Listar
  detalle(id: number): Observable<Tarea> {
    throw new Error("Method not implemented.");
  } // Detalle
  crear(tarea: Tarea): Observable<Tarea> {
    const url = `http://localhost:3000/tareas`;
    console.debug(`POST ${url} tarea %o `, tarea);

    return this.http.post<Tarea>(url, tarea);
  } // Crear
  modificar(tarea: Tarea): Observable<Tarea> {
    const url = `http://localhost:3000/tareas/${tarea.id}`;
    console.debug('PUT %s Modificar %o', url, tarea);

    return this.http.put<Tarea>(url, tarea);
  } // Modificar
  eliminar(id: number): Observable<Tarea> {
    const url = `http://localhost:3000/tareas/${id}`;
    console.debug('DELETE %s ', url);

    return this.http.delete<Tarea>(url);
  } // Eliminar
}
