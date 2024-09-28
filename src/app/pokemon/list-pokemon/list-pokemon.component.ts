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
  pokemonSelected: Pokemon| undefined

  constructor(private router : Router,private pokemonService : PokemonService){}

  ngOnInit() {
     this.pokemonService.getPokemonList()
     .subscribe(pokemonList => this.pokemonList);
  }

  selectPokemon(pokemonId : string) {

      const pokemon : Pokemon|undefined = this.pokemonList.find(pokemon=> pokemon.id == +pokemonId)
      if(pokemon ){
      console.log(`Vous avez demandé le Pokémon ${pokemon.name}`)
      this.pokemonSelected = pokemon
    }else{
      console.log(`Vous avez demandé un Pokémon qui n'existe pas`)
      this.pokemonSelected = pokemon
    }
  }

  goToDetailsPokemon(pokemon : Pokemon){
    this.router.navigate(['pokemon',pokemon.id])
  }

}
