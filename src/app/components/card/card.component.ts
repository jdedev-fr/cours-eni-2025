import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  titre = input<string>()
  description = input<string>()
  txtBtn = input<string>()
  valid = output()
}
