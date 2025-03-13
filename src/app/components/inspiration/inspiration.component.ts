import { Component, OnInit } from '@angular/core';
import { IInspiration } from '../../interfaces/iinspiration';
import { InspirationService } from '../../service/inspiration.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-inspiration',
  imports: [JsonPipe],
  templateUrl: './inspiration.component.html',
  styleUrl: './inspiration.component.scss'
})
export class InspirationComponent implements OnInit {
  inspiration: IInspiration | undefined
  errMess: string = ""

  constructor(private inspirationService: InspirationService) { }

  ngOnInit(): void {
    this.inspirationService.getInspiration().subscribe({
      next: (inspi) => this.inspiration = inspi,
      error: (err) => this.errMess = err.message
    })
  }
}
