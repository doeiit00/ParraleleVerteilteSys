import { TestBed } from '@angular/core/testing';

import { ShoppingItemService } from './shopping-item-service.service';

describe('ShoppingItemServiceService', () => {
  let service: ShoppingItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
