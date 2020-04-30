import { TestBed } from '@angular/core/testing';

import { FileStorageForUserService } from './file-storage-for-user.service';

describe('FileStorageForUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileStorageForUserService = TestBed.get(FileStorageForUserService);
    expect(service).toBeTruthy();
  });
});
