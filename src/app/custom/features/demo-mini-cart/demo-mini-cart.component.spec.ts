import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMiniCart } from './demo-mini-cart.component';

describe('DemoMiniCart', () => {
  let component: DemoMiniCart;
  let fixture: ComponentFixture<DemoMiniCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoMiniCart],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoMiniCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
