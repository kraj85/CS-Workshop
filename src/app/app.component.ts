import { Component, signal } from '@angular/core';
import { StorefrontComponent, OutletRefDirective, OutletPosition } from '@spartacus/storefront';

@Component({
  selector: 'app-root',
  imports: [StorefrontComponent, OutletRefDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected readonly title = signal('my-spartacus-app');
  protected readonly OutletPosition = OutletPosition;
}
