import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { POKEMONS } from './mock-pokemon';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient){}


getPokemonList():Pokemon[]{
  return POKEMONS;
};

getPokemonById(pokemonId : number): Pokemon|undefined{
  const pokemon : Pokemon|undefined = POKEMONS.find(pokemon=> pokemon.id == +pokemonId)
return pokemon
  
  
  // return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
  //   tap((pokemonList) => this.log(pokemonList)),
  //   catchError((error)=>{return this.handleError(error,undefined)}));
}

private log(response :Pokemon[]|Pokemon| undefined){
  console.table(response);
}

private handleError(error: Error, errorValue: any){
  console.error(error);
  return of(errorValue);
}

getPokemonTypeList(): string[] {
  return [
    'Plante', 
    'Feu', 
    'Eau', 
    'Insecte',
    'Normal',
    'Electrik', 
    'Poison', 
    'Fée',
    'Vol',
    'Combat',
    'Psy'
  ];
}

}
