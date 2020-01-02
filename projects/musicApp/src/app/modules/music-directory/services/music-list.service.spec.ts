import { TestBed } from '@angular/core/testing';

import { MusicListService } from './music-list.service';

describe('MusicListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicListService = TestBed.get(MusicListService);
    expect(service).toBeTruthy();
  });
});
