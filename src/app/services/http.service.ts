import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  //Funções para consumir a API
  
  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  getInfoPokemons(id: number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id + '/');
  }

}