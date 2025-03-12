import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-auto',
  imports: [FormsModule],
  templateUrl: './mon-component-auto.component.html',
  styleUrl: './mon-component-auto.component.scss'
})
export class MonComponentAutoComponent {
  nom: string = "julien"
  condition: boolean = false
  fruits: Array<String> = [
    "Pomme",
    "Poire",
    "Banane"
  ]
  affCache() {
    this.condition = !this.condition
  }
}
