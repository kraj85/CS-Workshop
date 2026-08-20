import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, CustomLoginGuard, NotAuthGuard, OAuthLibWrapperService, provideConfig } from '@spartacus/core';
import { CustomOAuthLibWrapperService } from '../../custom/services/custom-oauth-lib-wrapper.service';
import { CustomLoginFormModule } from '../../custom/features/accounts/components/login-form/custom-login-form.module';
import { SmartEditConfig } from '@spartacus/smartedit/root';

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
  })
  ],
})
export class CustomConfigModule {}
