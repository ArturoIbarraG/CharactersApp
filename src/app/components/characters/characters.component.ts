import { Component, OnInit } from '@angular/core';
import { Character, CharactersService } from '../../servicios/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  characters:Character[] = [];

  constructor( private _charactersService:CharactersService,
               private router:Router ) { 
    
  }

  ngOnInit(): void {
    this.characters = this._charactersService.getCharacters();
  }

  viewCharacter(idx:number){
    this.router.navigate( ['/character',idx] );
  }

}