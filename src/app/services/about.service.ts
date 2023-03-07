import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class AboutService {
  aboutText =
    'Soy un apasionado por la tecnología con una fuerte motivación por aprender y desarrollar mis habilidades en el mundo IT. Empece a programar en 2019 de forma autodidacta y poco a poco fui incursionando en el desarrollo web. Desde 2020 soy estudiante de Ingeniería Informática. En 2022 decidí formalizar mis conocimientos mediante los cursos Oracle Next Education y Argentina Programa. Mis valores se basan en el compromiso, el orden y la eficiencia. ';

  constructor() {}

  getAbout(): Observable<String>{
    return of(this.aboutText);
  }
}