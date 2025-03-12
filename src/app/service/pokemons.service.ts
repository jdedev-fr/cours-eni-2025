import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IListePokemon } from '../interfaces/ilistePokemon';
import { map, Observable } from 'rxjs';
import { IDetailPokemon } from '../interfaces/idetailPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient: HttpClient) { }

  getAllPokemons(page: number = 0): Observable<IListePokemon> {
    return this.httpClient.get<IListePokemon>(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}`)
  }
  getPokemonDet(url: string): Observable<IDetailPokemon> {
    return this.httpClient.get<any>(url).pipe(
      map(poke => ({
        id: poke.id as number,
        image: poke.sprites.front_default as string,
        nom: poke.name as string,
        poids: poke.weight as number
      }))
    )
  }
}
