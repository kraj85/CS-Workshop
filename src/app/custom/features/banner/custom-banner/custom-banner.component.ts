import { Component, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CmsBannerComponent } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-banner',
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './custom-banner.component.html',
  styleUrl: './custom-banner.component.scss',
})
export class CustomBannerComponent {
  component = inject(CmsComponentData<CmsBannerComponent>);
  data$ = this.component.data$;
}
