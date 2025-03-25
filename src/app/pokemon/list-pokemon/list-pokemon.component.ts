import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {


  pokemonList! : Pokemon[]
  pokemonsSelected: Pokemon []

  constructor(private router : Router,private pokemonService : PokemonService){}

  ngOnInit() {
  this.pokemonList =  this.pokemonService.getPokemonList()
  }

  selectPokemon(prompt: string) {
    const matchingPokemons: Pokemon[] = this.pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(prompt.toLowerCase())
    );

    if (matchingPokemons.length > 0) {
        console.log(`Vous avez demandé les Pokémon suivants : ${matchingPokemons.map(p => p.name).join(', ')}`);
        this.pokemonsSelected = matchingPokemons;
    } else {
        console.log(`Aucun Pokémon ne correspond à votre recherche.`);
        this.pokemonsSelected = [];
    }
}


  goToDetailsPokemon(pokemon : Pokemon){
    this.router.navigate(['pokemon',pokemon.id])
  }

}
