import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls:['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {


  @Input()pokemon: Pokemon;

  pokemonTypes : string[];

  constructor(private pokemonService: PokemonService,
    private router : Router){

  }
  ngOnInit() {
    this.pokemonTypes = this.pokemonService.getPokemonTypeList();
  }

  hasType(type : string):boolean{
    return this.pokemon.types.includes(type);

  }

  selectType($event:Event, type: string ){
    const isChecked : boolean= ($event.target as HTMLInputElement).checked;

    if (isChecked){
      this.pokemon.types.push(type);
    }else{
      this.pokemon.types.splice(this.pokemon.types.indexOf(type));
    }
  }

  onSubmit(){
    console.log("Submitted form !");
    this.router.navigate(['/pokemon', this.pokemon.id]);

  }

  isTypesValid(type : string): boolean{

    if(this.pokemon.types.length == 1 && this.hasType(type) ){
      return false;
    } 

    if(this.pokemon.types.length > 2 && !this.hasType(type) ){
      return false;
    } 

    return true;

  }



}
