import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { 
    console.trace("PokemonService Constructor");
  }
}
