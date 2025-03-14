import { Component, OnDestroy, OnInit } from '@angular/core';
import { IInspiration } from '../../interfaces/iinspiration';
import { InspirationService } from '../../service/inspiration.service';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inspiration',
  imports: [JsonPipe],
  templateUrl: './inspiration.component.html',
  styleUrl: './inspiration.component.scss'
})
export class InspirationComponent implements OnInit, OnDestroy {
  inspiration: IInspiration | undefined
  errMess: string = ""
  sub: Subscription | undefined

  constructor(private inspirationService: InspirationService) { }

  ngOnInit(): void {
    this.sub = this.inspirationService.getInspiration().subscribe({
      next: (inspi) => this.inspiration = inspi,
      error: (err) => this.errMess = err.message
    })

  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe()
    }
  }
}
