import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isNotNullable, Product, UrlModule } from '@spartacus/core';
import { CurrentProductService, OutletPosition, OutletRefModule, ProductDetailOutlets } from '@spartacus/storefront';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-exercise-outlet',
  imports: [RouterModule, UrlModule, OutletRefModule,AsyncPipe],
  templateUrl: './exercise-outlet.component.html',
  styleUrl: './exercise-outlet.component.scss',
})
export class ExerciseOutlet {
  //Exercise 3
  before: OutletPosition = OutletPosition.REPLACE;

  //Exercise 4
  pdpOutlets = ProductDetailOutlets
  productService = inject(CurrentProductService);
  private product$: Observable<Product> = this.productService
    .getProduct()
    .pipe(filter(isNotNullable));

  availableForPickup$: Observable<boolean> = this.product$.pipe(
    map((pro) => !!pro.availableForPickup),
  );
}
