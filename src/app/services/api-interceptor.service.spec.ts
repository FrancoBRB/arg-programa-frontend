/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiInterceptorService } from './api-interceptor.service';

describe('Service: ApiInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiInterceptorService]
    });
  });

  it('should ...', inject([ApiInterceptorService], (service: ApiInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
