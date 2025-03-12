import { Component, ElementRef } from '@angular/core';
import { PokemonsService } from '../../service/pokemons.service';
import { IItemPokemon } from '../../interfaces/iitemPokemon';
import { from, map, Observable } from 'rxjs';
import { IDetailPokemon } from '../../interfaces/idetailPokemon';

@Component({
  selector: 'app-pokedex',
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  pokemons: Array<IItemPokemon> = []
  state: boolean = false
  selected: number = -1
  pokeSel: IDetailPokemon | null = null

  constructor(private pokemonService: PokemonsService, private _elementRef: ElementRef) { }

  getValid(index: number): string {
    return (index == this.selected).toString()
  }
  switchState() {
    if (!this.state) {
      this.pokemonService.getAllPokemons().pipe(
        map(liste => ([...liste.results]))
      ).subscribe({
        next: items => this.pokemons = [...items]
      })
      this.state = true
    }
    else {
      this.pokemons = []
      this.state = false
      this.pokeSel = null
      this.selected = -1
    }

  }
  selectDown() {
    this.selected++
  }
  selectUp() {
    this.selected--
  }
  validPoke() {
    const elementSelected = this._elementRef.nativeElement.querySelector('[data-selected=true]') as HTMLElement
    const url = elementSelected.dataset['url']
    if (url) {
      this.pokemonService.getPokemonDet(url).subscribe({
        next: poke => this.pokeSel = { ...poke }
      })
    }
  }
  cancelPoke() {
    this.pokeSel = null
  }
}
