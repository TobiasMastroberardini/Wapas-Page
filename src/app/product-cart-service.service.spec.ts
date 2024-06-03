import { TestBed } from '@angular/core/testing';

import { ProductCartServiceService } from './product-cart-service.service';

describe('ProductCartServiceService', () => {
  let service: ProductCartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
