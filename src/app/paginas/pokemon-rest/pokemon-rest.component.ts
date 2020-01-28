import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { 
    console.trace('PokemonRestComponent Constructor');
    this.pokemon = new Pokemon('pikachu');
  }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    // Llamadas a los Servicios.
    // A un Observable nos tenemos que suscribir.
    // Cuando llamamos a un observable tenemos tres posibles metodos solo uno es obligatorio.

    this.pokemonService.getPokemon(this.pokemon.nombre).subscribe(
      data => {
        console.debug('Petición Correcta data %o', data);
      },
      error => {
        console.warn('Petición Erronea data %o', error);
      },
      () => {
        console.trace('Esto se hace Siempre');
      }
    );
  }

}
