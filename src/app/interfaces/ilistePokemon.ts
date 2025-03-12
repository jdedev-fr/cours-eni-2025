import { IItemPokemon } from "./iitemPokemon"

export interface IListePokemon {
    count: number
    next: string
    previous: string
    results: Array<IItemPokemon>
}