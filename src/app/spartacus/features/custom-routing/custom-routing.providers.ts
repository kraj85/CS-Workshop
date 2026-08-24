import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { OccConfig, PRODUCT_NORMALIZER, provideConfig, RoutingConfig } from '@spartacus/core';
import { ProductPrettyNameNormalizer } from './custom-routes/product-name.normalizer';

export function provideCustomRouting(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideConfig(<RoutingConfig>{
      routing: {
        routes: {
          product: {
            paths: [
              'product/:manufacturer/:productCode/:prettyName',
              'product/:productCode/:name',
            ],
          },
        },
      },
    }),
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          endpoints: {
            productSearch:
              'products/search?fields=products(code,manufacturer,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
          },
        },
      },
    }),
    {
      provide: PRODUCT_NORMALIZER,
      useExisting: ProductPrettyNameNormalizer,
      multi: true,
    },
  ]);
}
