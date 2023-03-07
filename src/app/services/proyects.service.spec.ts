/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProyectsService } from './proyects.service';

describe('Service: Proyects', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyectsService]
    });
  });

  it('should ...', inject([ProyectsService], (service: ProyectsService) => {
    expect(service).toBeTruthy();
  }));
});
