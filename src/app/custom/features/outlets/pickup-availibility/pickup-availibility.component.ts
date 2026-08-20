import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product, isNotNullable } from '@spartacus/core';
import { ProductDetailOutlets, CurrentProductService } from '@spartacus/storefront';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-pickup-availibility',
  imports: [AsyncPipe],
  templateUrl: './pickup-availibility.component.html',
  styleUrl: './pickup-availibility.component.scss',
})
export class PickupAvailibility {
// Exercise - 5 
  pdpOutlets = ProductDetailOutlets
  productService = inject(CurrentProductService);
  private product$: Observable<Product> = this.productService
    .getProduct()
    .pipe(filter(isNotNullable));

  availableForPickup$: Observable<boolean> = this.product$.pipe(
    map((pro) => !!pro.availableForPickup),
  );
}
