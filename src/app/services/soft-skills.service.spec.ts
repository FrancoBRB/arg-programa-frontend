/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoftSkillsService } from './soft-skills.service';

describe('Service: SoftSkills', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoftSkillsService]
    });
  });

  it('should ...', inject([SoftSkillsService], (service: SoftSkillsService) => {
    expect(service).toBeTruthy();
  }));
});
