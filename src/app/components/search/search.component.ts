import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Character, CharactersService} from '../../servicios/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  result:string = "";
  characters:Character[] = [];

  constructor( private activatedRoute:ActivatedRoute,
               private _charactersService:CharactersService,
               private router:Router
  ) {  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {

      this.characters = this._charactersService.searchCharacters( params['text'] );
      // validar si tuvo resultados o no
      if( this.characters.length == 0 ){
        this.result = "No results found in search.";
      } else {
        this.result = "Characters found:";
      }

    })
  }

}
