import { TestBed } from '@angular/core/testing';

import { PetTypesService } from './pet-types.service';

describe('PetTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetTypesService = TestBed.get(PetTypesService);
    expect(service).toBeTruthy();
  });
});
