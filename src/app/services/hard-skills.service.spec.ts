/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HardSkillsService } from './hard-skills.service';

describe('Service: HardSkills', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardSkillsService]
    });
  });

  it('should ...', inject([HardSkillsService], (service: HardSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
