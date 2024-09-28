import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  template: `
   <h2 class="center"> Modifier le Pokémon: {{pokemon?.name}} </h2>
  <p class="center">
  <img [src]="pokemon?.picture">
</p>
<app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  
  `,
})
export class EditPokemonComponent implements OnInit {
  
  pokemon : Pokemon|undefined;

  constructor(
    private route : ActivatedRoute,
    private pokemonService : PokemonService
  ){}

  
  ngOnInit(): void {
    const pokemonId: string| null = this.route.snapshot.paramMap.get('id');

    if(pokemonId){
      this.pokemonService.getPokemonById(+pokemonId)
      .subscribe(p => this.pokemon);
    }else{
      this.pokemon = undefined;
    }

  }



}
