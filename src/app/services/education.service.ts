import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class EducationService {
  education = [
    {
      id: 1,
      institucion: 'UNL Fich',
      carrera: 'Ingeniería Informática',
      fecha_inicial: 'Marzo 2020',
      fecha_final: 'Actualidad',
      img: 'assets/img/fich.png',
    },
    {
      id: 2,
      institucion: 'Oracle Next Education',
      carrera: 'Desarrollador',
      fecha_inicial: 'Julio 2022',
      fecha_final: 'Enero 2023',
      img: 'assets/img/one.png',
    },
    {
      id: 3,
      institucion: 'Argentina Programa',
      carrera: 'Desarrollador Fullstack',
      fecha_inicial: 'Junio 2022',
      fecha_final: 'Mayo 2023',
      img: 'assets/img/ap.png',
    },
  ];

  constructor() {}

  getEducation(): Observable<edu[]> {
    return of(this.education);
  }
}

export interface edu {
  id: number;
  institucion: String;
  carrera: String;
  fecha_inicial: String;
  fecha_final: String;
  img: String;
}
