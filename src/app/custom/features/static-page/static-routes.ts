import { Routes } from '@angular/router';
import { CmsPageGuard, PageLayoutComponent } from '@spartacus/storefront';
import { StaticPageComponent } from './static-page/static-page.component';

export const staticRoutes: Routes = [
  {
    path: 'sale',
    component: StaticPageComponent,
    canActivate: [CmsPageGuard],
  },
  {
    path: 'demo/static/page',
    component: PageLayoutComponent,
    data: { pageLabel: '/faq' },
    canActivate: [CmsPageGuard],
  },
];
