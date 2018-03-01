import { TestBed, inject } from '@angular/core/testing';

import { AutorizarService } from './autorizar.service';

describe('AutorizarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizarService]
    });
  });

  it('should be created', inject([AutorizarService], (service: AutorizarService) => {
    expect(service).toBeTruthy();
  }));
});
