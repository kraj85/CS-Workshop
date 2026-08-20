import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { UrlModule, I18nModule, FeaturesConfigModule, FeatureDirective, TranslatePipe, UrlPipe } from '@spartacus/core';
import {
  FormErrorsModule,
  SpinnerModule,
  PasswordVisibilityToggleModule,
  FormErrorsComponent,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  PasswordVisibilityToggleDirective,
  SpinnerComponent,
} from '@spartacus/storefront';
import { LoginFormComponent } from '@spartacus/user/account/components';

@Component({
  selector: 'app-custom-login-form',
  templateUrl: './custom-login-form.component.html',
  styleUrl: './custom-login-form.component.scss',
  standalone: true,
  imports: [
   NgIf,
    SpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
    FormRequiredLegendComponent,
    FormRequiredAsterisksComponent,
    FormErrorsComponent,
    PasswordVisibilityToggleDirective,
    FeatureDirective,
    RouterLink,
    AsyncPipe,
    UrlPipe,
    TranslatePipe,
  ],
})
export class CustomLoginFormComponent extends LoginFormComponent {}
