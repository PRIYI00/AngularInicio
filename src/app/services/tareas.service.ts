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
    throw new Error("Method not implemented.");
  } // Crear
  modificar(tarea: Tarea): Observable<Tarea> {
    throw new Error("Method not implemented.");
  } // Modificar
  eliminar(id: number): Observable<Tarea> {
    throw new Error("Method not implemented.");
  } // Eliminar
}
