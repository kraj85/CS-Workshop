import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoginFormComponent } from './custom-login-form.component';
import { AuthService, CmsConfig, GlobalMessageService, provideConfig, WindowRef } from '@spartacus/core';
import { LoginFormComponent, LoginFormComponentService } from '@spartacus/user/account/components';

@NgModule({
  imports: [CommonModule, CustomLoginFormComponent],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ReturningCustomerLoginComponent: {
          component: LoginFormComponent,
          providers: [
            {
              provide: LoginFormComponentService,
              useClass: LoginFormComponentService,
              deps: [AuthService, GlobalMessageService, WindowRef],
            },
          ],
        },
      },
    }),
  ],
})
export class CustomLoginFormModule {}
