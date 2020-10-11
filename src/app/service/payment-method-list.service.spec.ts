import { TestBed } from '@angular/core/testing';

import { PaymentMethodListService } from './payment-method-list.service';

describe('PaymentMethodListService', () => {
  let service: PaymentMethodListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentMethodListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
