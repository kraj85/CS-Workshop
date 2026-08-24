import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, CmsConfig, CustomLoginGuard, NotAuthGuard, OAuthLibWrapperService, provideConfig } from '@spartacus/core';
import { CustomOAuthLibWrapperService } from '../../custom/services/custom-oauth-lib-wrapper.service';
import { CustomLoginFormModule } from '../../custom/features/accounts/components/login-form/custom-login-form.module';
import { SmartEditConfig } from '@spartacus/smartedit/root';
import { CustomBannerComponent } from '../../custom/features/banner/custom-banner/custom-banner.component';
import { DemoMiniCart } from '../../custom/features/demo-mini-cart/demo-mini-cart.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // {
    //   provide: OAuthLibWrapperService,
    //   useClass: CustomOAuthLibWrapperService,
    // },
    provideConfig(<CmsConfig>{
      featureModules: {
        customLoginForm: {
          module: () =>
            import('../../custom/features/accounts/components/login-form/custom-login-form.module').then(
              (m) => m.CustomLoginFormModule
            ),
          cmsComponents: ['ReturningCustomerLoginComponent'],
        },
      },
      cmsComponents: {
        ReturningCustomerLoginComponent: {
          guards: [NotAuthGuard, CustomLoginGuard],
        },
      },
    }),
    provideConfig(<SmartEditConfig>{
    smartEdit: {
      storefrontPreviewRoute: 'cx-preview',
     allowOrigin: 'localhost:9002, electronics-spa.internal:9002',

    },
  }),
    provideConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: CustomBannerComponent,
          // guards: [AuthGuard],
        },
      },
    }),
    //Comment this for all exercises to utilize OOTB mini cart styles
    // provideConfig(<CmsConfig>{
    //   cmsComponents:{
    //     MiniCartComponent:{
    //       component:DemoMiniCart
    //     }
    //   }
    // })
  ],
})
export class CustomConfigModule {}
