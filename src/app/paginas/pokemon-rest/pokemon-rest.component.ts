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
  mensaje: string;

  constructor(private pokemonService: PokemonService) { 
    console.trace('PokemonRestComponent Constructor');
    this.mensaje = '';
    this.pokemon = new Pokemon('charmander');
  }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    // Llamadas a los Servicios.
    // A un Observable nos tenemos que suscribir.
    // Cuando llamamos a un observable tenemos tres posibles metodos solo uno es obligatorio.

    this.pokemonService.getPokemon(this.pokemon.nombre).subscribe(
      data => {
        console.debug('Petición Correcta data %o', data);
        this.pokemon.id = data.id;
        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;
        this.pokemon.habilidades.push(data.abilities[0].ability.name);
        this.pokemon.habilidades.push(data.abilities[1].ability.name);

        this.mensaje = 'Pokemon cargado desde https://pokeapi.co/';

        // Conseguir su Habilidad.
      },
      error => {
        console.warn('Petición Erronea data %o', error);
        this.mensaje = 'No Existe Pokemon X';
      },
      () => {
        console.trace('Esto se hace Siempre');
      }
    );
  }

}
