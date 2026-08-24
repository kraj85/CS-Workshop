import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UrlModule } from '@spartacus/core';

@Component({
  selector: 'app-static-page',
  imports: [RouterLink, UrlModule],
  templateUrl: './static-page.component.html',
  styleUrl: './static-page.component.scss',
})
export class StaticPageComponent {}
