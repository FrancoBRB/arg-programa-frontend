import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguagesService {
  languages = [
    {
      id: 1,
      nombre: 'Inglés',
      porcentaje: 80,
    },
    {
      id: 2,
      nombre: 'Español',
      porcentaje: 100,
    },
  ];

  constructor() {}

  getLanguages(): Observable<Language[]> {
    return of(this.languages);
  }
}

export interface Language {
  id: Number;
  nombre: String;
  porcentaje: Number;
}
