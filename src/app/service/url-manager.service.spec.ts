import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UrlManagerService } from './url-manager.service';

describe('UrlManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: UrlManagerService = TestBed.get(UrlManagerService);
    expect(service).toBeTruthy();
  });
});
