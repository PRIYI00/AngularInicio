import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{ //implements IPokemonService TODO
  constructor(private http: HttpClient) { 
    console.trace("PokemonService Constructor");
  }

  getPokemon(nombre:string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace("PokemonService getPokemon " + url);
    return this.http.get(url);
  }

  getCaracteristicas(id: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
}
