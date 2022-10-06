import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  imageUrl =	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(
    private http: HttpClient
  ) { 
    this.getPokeImage(0);
  }

  //Funções para consumir a API

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }

  getInfoPokemons(id: number){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id + '/');
  }

  getMoves(id: number){
    return this.http.get('https://pokeapi.co/api/v2/move/' + id + '/');
  }

  getGender(id: number){
   return this.http.get('https://pokeapi.co/api/v2/gender/' + id + '/');
  }

  // Consumindo a API para trazer os resultados

  getPokemon(offset = 0) {
    return this.http
      .get(`${this.baseUrl}?offset=${offset}&limit=25`)
      .pipe(
        map(result => {
          return result['results'];
        }),
        map(pokemon => {
          return pokemon.map((poke, index) => {
            poke.image = this.getPokeImage(offset + index + 1);
            poke.pokeIndex = offset + index;
            return poke;
          });
        })
      );
  }

  // Trazendo a imagem dos pokemons

  getPokeImage(index) {
    return `${this.imageUrl}${index}.png`;
  }

  // Funcao para trazer os detalhes dos pokemons

  getPokeDetails(id: number) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id + '/').pipe(
      map(poke => {
        let sprites = Object.keys(poke['sprites']);
        poke['images'] = sprites
          .map(spriteKey => poke['sprites'][spriteKey])
          .filter(img => img);
        return poke;
      })
    );
  }

}