import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

interface IProduit {
  id: number
  nom: string
  description: string
  prix: number
  dispo: boolean
}

@Component({
  selector: 'app-crud-produit',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './crud-produit.component.html',
  styleUrl: './crud-produit.component.scss'
})
export class CrudProduitComponent {

  nom: string = ""
  description: string = ""
  dispo: boolean = false
  prix: number = 0

  produits: Array<IProduit> = []

  getNextId(): number {
    const id: number = (this.produits.length == 0) ? 1 : this.produits[this.produits.length - 1].id + 1;
    return id
  }
  validForm() {
    const produitTemp: IProduit = {
      id: this.getNextId(),
      nom: this.nom,
      description: this.description,
      prix: this.prix,
      dispo: this.dispo
    }
    this.produits.push(produitTemp)
  }
}
