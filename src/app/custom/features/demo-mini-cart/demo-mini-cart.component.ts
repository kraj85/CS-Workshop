import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { MiniCartComponent } from '@spartacus/cart/base/components/mini-cart';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-demo-mini-cart',
  imports: [AsyncPipe, RouterLink, IconModule, UrlModule, I18nModule],
  templateUrl: './demo-mini-cart.component.html',
  styleUrl: './demo-mini-cart.component.scss',
})
export class DemoMiniCart extends MiniCartComponent{
  activeCartFacade = inject(ActiveCartFacade);

  entriesCount$ = this.activeCartFacade.getActive().pipe(
    filter(cart => !!cart.code),
    map(cart => cart.entries?.length ?? 0)
  );
}
