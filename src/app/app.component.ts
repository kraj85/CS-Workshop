import { Component, signal } from '@angular/core';
import { StorefrontComponent, OutletRefDirective, OutletPosition } from '@spartacus/storefront';
import { ExerciseOutlet } from './custom/features/outlets/exercise-outlet/exercise-outlet.component';

@Component({
  selector: 'app-root',
  imports: [StorefrontComponent, OutletRefDirective,ExerciseOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected readonly title = signal('my-spartacus-app');
  protected readonly OutletPosition = OutletPosition;
}
