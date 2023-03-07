import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SoftSkillsService {
  softskills = [
    {
      id: 1,
      caracteristica: 'Pensamiento crítico',
      porcentaje: 85,
    },
    {
      id: 2,
      caracteristica: 'Trabajo en equipo',
      porcentaje: 60,
    },
    {
      id: 3,
      caracteristica: 'Resiliencia',
      porcentaje: 95,
    },
    {
      id: 4,
      caracteristica: 'Desarrollo constante',
      porcentaje: 100,
    },
    {
      id: 5,
      caracteristica: 'Creatividad',
      porcentaje: 40,
    },
  ];

  constructor() {}

  getSoftSkills(): Observable<softSkill[]> {
    return of(this.softskills);
  }
}

export interface softSkill {
  id: Number;
  caracteristica: String;
  porcentaje: Number;
}
