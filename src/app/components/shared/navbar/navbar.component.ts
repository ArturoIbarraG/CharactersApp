import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../../servicios/characters.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _charactersService:CharactersService,
               private router:Router
               ) { }

  ngOnInit(): void {
  }

  searchCharacter( text:string ){
    this.router.navigate( ['/search',text] );
  }

}
