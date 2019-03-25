import { TestBed } from '@angular/core/testing';

import { NavbarInputService } from './navbar-input.service';

describe('NavbarInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarInputService = TestBed.get(NavbarInputService);
    expect(service).toBeTruthy();
  });
});
