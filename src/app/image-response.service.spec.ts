import { TestBed } from '@angular/core/testing';

import { ImageResponseService } from './image-response.service';

describe('ImageResponseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageResponseService = TestBed.get(ImageResponseService);
    expect(service).toBeTruthy();
  });
});
