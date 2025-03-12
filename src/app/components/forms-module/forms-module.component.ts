import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-module',
  imports: [FormsModule],
  templateUrl: './forms-module.component.html',
  styleUrl: './forms-module.component.scss'
})
export class FormsModuleComponent {
  inpNom: string = ""
  inpPrenom: string = ""

  validForm(event: any) {
    console.log(event);
    event.preventDefault()

    alert(`Votre nom : ${this.inpNom} ${this.inpPrenom}`)
    this.inpNom = ""
    this.inpPrenom = ""
  }
}
