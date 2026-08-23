import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule, ICON_TYPE } from '@spartacus/storefront';
import { map, startWith, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { MiniCartComponent } from '@spartacus/cart/base/components/mini-cart';

@Component({
  selector: 'app-demo-mini-cart',
  imports: [AsyncPipe, RouterLink, IconModule, UrlModule, I18nModule],
  templateUrl: './demo-mini-cart.component.html',
  styleUrl: './demo-mini-cart.component.scss',
})
export class DemoMiniCart extends MiniCartComponent{
  activeCartFacade = inject(ActiveCartFacade);

  entriesCount$ = this.activeCartFacade.getActive().pipe(
    map(cart => cart.entries?.length ?? 0)
  );


}
