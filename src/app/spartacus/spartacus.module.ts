import { NgModule } from '@angular/core';
import { BaseStorefrontModule } from '@spartacus/storefront';
import { SpartacusConfigurationModule } from './spartacus-configuration.module';
import { SpartacusFeaturesModule } from './spartacus-features.module';
import { CustomConfigModule } from '../config/custom-config/custom-config.module';

@NgModule({
  declarations: [],
  imports: [BaseStorefrontModule, SpartacusFeaturesModule, SpartacusConfigurationModule,CustomConfigModule],
  exports: [BaseStorefrontModule],
})
export class SpartacusModule {}
