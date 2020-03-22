import { TestBed } from '@angular/core/testing';

import { PokeshopService } from './pokeshop.service';

describe('PokeshopService', () => {
  let service: PokeshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
