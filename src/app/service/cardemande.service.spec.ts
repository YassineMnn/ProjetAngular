import { TestBed } from '@angular/core/testing';

import { CardemandeService } from './cardemande.service';

describe('CardemandeService', () => {
  let service: CardemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
