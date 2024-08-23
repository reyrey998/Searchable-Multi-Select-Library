import { TestBed } from '@angular/core/testing';

import { SearchableMultiSelectService } from './searchable-multi-select.service';

describe('SearchableMultiSelectService', () => {
  let service: SearchableMultiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchableMultiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
