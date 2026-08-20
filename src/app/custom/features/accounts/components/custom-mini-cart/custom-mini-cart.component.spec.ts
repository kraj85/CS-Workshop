import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMiniCart } from './custom-mini-cart.component';

describe('CustomMiniCart', () => {
  let component: CustomMiniCart;
  let fixture: ComponentFixture<CustomMiniCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMiniCart],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomMiniCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
