import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,  Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-details-pokemon',
  templateUrl: './details-pokemon.component.html',
  styles: ``
})
export class DetailsPokemonComponent implements OnInit {

  pokemonList : Pokemon[] | undefined;
  pokemon : Pokemon|undefined;
  constructor(private actRouter :ActivatedRoute,
      private router : Router,
     private pokemonService : PokemonService
     ){}

        




    
  
  ngOnInit(): void {
  const pokemonId : string|null = this.actRouter.snapshot.paramMap.get('id');

 

  console.log(pokemonId)
  if(pokemonId){

  this.pokemon= this.pokemonService.getPokemonById(+pokemonId)
  }
  
  }

  goToPokemonList(){
    this.router.navigate(['pokemons']);

  }

}
