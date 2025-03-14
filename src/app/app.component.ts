import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MonComponentManuel } from '../monComponentManuel/monComponentManuel';
import { MonComponentAutoComponent } from './components/mon-component-auto/mon-component-auto.component';
import { CrudUserComponent } from "./components/crud-user/crud-user.component";
import { CrudProduitComponent } from "./components/crud-produit/crud-produit.component";
import { PokedexComponent } from "./components/pokedex/pokedex.component";
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex !';

  clickCard() {
    alert("click sur la card")
  }
}
