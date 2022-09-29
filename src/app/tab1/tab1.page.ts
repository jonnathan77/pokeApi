import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public pokemons: any[] = [];

  constructor(
    private httpService: HttpService,
  ) {}

  ngOnInit(){
    this.getPokemons()
  }

  getPokemons() {
    this.httpService.getPokemons().subscribe((data: any) => this.pokemons = data.results)
  }

  showPokemon(id: number){
    console.log('Id do pokemon' + id)
   // this.httpService.getInfoPokemons(id).subscribe((data: any) => this.pokemons = data.results)
  }

}
