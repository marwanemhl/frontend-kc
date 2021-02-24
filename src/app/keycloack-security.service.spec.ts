import { TestBed } from '@angular/core/testing';

import { KeycloackSecurityService } from './keycloack-security.service';

describe('KeycloackSecurityService', () => {
  let service: KeycloackSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeycloackSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
