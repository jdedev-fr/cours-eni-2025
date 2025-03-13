import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IInspiration } from '../interfaces/iinspiration';

@Injectable({
  providedIn: 'root'
})
export class InspirationService {

  constructor(private http: HttpClient) { }

  getInspiration(): Observable<IInspiration> {
    return this.http.get<any>('https://zenquotes.io/api/random').pipe(
      map(elem => ({
        quote: elem[0].q,
        auteur: elem[0].a
      }))
    )
  }
}
