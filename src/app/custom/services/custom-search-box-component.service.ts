import { Injectable } from "@angular/core";
import { SearchboxService, RoutingService, TranslationService, WindowRef, EventService, ProductActions } from "@spartacus/core";
import { SearchBoxComponentService, SearchBoxConfig } from "@spartacus/storefront";


@Injectable()
export class CustomSearchBoxComponentService extends SearchBoxComponentService {
  constructor(
    searchService: SearchboxService,
    routingService: RoutingService,
    translationService: TranslationService,
    winRef: WindowRef,
    eventService: EventService
  ) {
    super(searchService, routingService, translationService, winRef, eventService);
  }

  override search(query: string, config: SearchBoxConfig): void {
    (this as any).hasKeywordRedirect = false;
    (this as any).currentQueryLength = query ? query.length : 0;
    this.searchCompleted.next(false);

    if (
      !this.enableRecentSearches &&
      !this.enableTrendingSearches &&
      (!query || query === '')
    ) {
      this.clearResults();
      return;
    }

    if (
      config.minCharactersBeforeRequest &&
      query.length < config.minCharactersBeforeRequest
    ) {
      return;
    }

    let productsComplete = !config.displayProducts;
    let suggestionsComplete = !config.displaySuggestions;

    if (config.displayProducts) {
      this.searchService 
        .searchWithCompletion(query, {
          pageSize: config.maxProducts,
          sort: 'topRated',
        })
        .subscribe((result: any) => {
          if (
            result?.type === ProductActions.SEARCH_PRODUCTS_SUCCESS &&
            result?.payload?.keywordRedirectUrl
          ) {
            (this as any).hasKeywordRedirect = true;
          }
          productsComplete = true;
          (this as any).checkSearchCompletion(productsComplete, suggestionsComplete);
        });
    }

    if (config.displaySuggestions) {
      (this.searchService as any)
        .searchSuggestionsWithCompletion(query, {
          pageSize: config.maxSuggestions,
        })
        .subscribe((result: any) => {
          if (
            result?.type === ProductActions.GET_PRODUCT_SUGGESTIONS_SUCCESS &&
            result?.payload?.keywordRedirectUrl
          ) {
            (this as any).hasKeywordRedirect = true;
          }
          suggestionsComplete = true;
          (this as any).checkSearchCompletion(productsComplete, suggestionsComplete);
        });
    }
  }
}
