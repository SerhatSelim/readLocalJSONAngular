import { TestBed } from '@angular/core/testing';

import { JsonFileServiceService } from './json-file-service.service';

describe('JsonFileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonFileServiceService = TestBed.get(JsonFileServiceService);
    expect(service).toBeTruthy();
  });
});
