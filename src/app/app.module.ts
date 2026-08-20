import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AppRoutingModule,
  OutletPosition,
  ProductDetailOutlets,
  provideOutlet,
} from '@spartacus/storefront';
import { SpartacusModule } from './spartacus/spartacus.module';
import { PickupAvailibility } from './custom/features/outlets/pickup-availibility/pickup-availibility.component';

@NgModule({
  imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), AppRoutingModule, SpartacusModule],
  // Exercise 5 
  // providers: [
  //   provideOutlet({
  //     id: ProductDetailOutlets.SUMMARY,
  //     component: PickupAvailibility,
  //     position: OutletPosition.BEFORE,
  //   }),
  // ],
})
export class AppModule {}
