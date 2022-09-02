import { TestBed } from '@angular/core/testing';

import { DataSahreService } from './data-sahre.service';

describe('DataSahreService', () => {
  let service: DataSahreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSahreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
