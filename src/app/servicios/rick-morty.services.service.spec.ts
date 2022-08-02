import { TestBed } from '@angular/core/testing';

import { RickMorty.ServicesService } from './rick-morty.services.service';

describe('RickMorty.ServicesService', () => {
  let service: RickMorty.ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMorty.ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
