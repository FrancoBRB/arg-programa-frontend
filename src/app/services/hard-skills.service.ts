import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HardSkillsService {
  skills = [
    {
      id: 1,
      skill: 'HTML/CSS',
    },
    {
      id: 2,
      skill: 'JAVASCRIPT',
    },
    {
      id: 3,
      skill: 'TYPESCRIPT',
    },
    {
      id: 4,
      skill: 'ANGULAR',
    },
    {
      id: 5,
      skill: 'SVELTE',
    },
    {
      id: 6,
      skill: 'NODEJS',
    },
  ];

  constructor() {}

  getSkills(): Observable<hardSkill[]> {
    return of(this.skills);
  }
}

export interface hardSkill {
  id: number;
  skill: string;
}
