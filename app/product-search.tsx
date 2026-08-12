"use client";

import { useEffect, useMemo, useState } from "react";
import { getProductMeta, getSearchSuggestionsFromCatalog } from "./search-utils";
import { shopCatalog, type ShopCatalogProduct } from "./shop-catalog";
import { getApiBase } from "./api-base";

const trendingSlugs = [
  "hp-elitebook-8-g1i-14-ai-pc",
  "tough-cable-management-for-19-server-rack",
  "tough-cx-42u-800mm-x-1200mm-d-4-com-equipment-rack-bi-fold-perforateddoor",
  "tough-cx-series-vertical-cable-management",
];

export function ProductSearch() {
  const [catalog, setCatalog] = useState<ShopCatalogProduct[]>(shopCatalog);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const normalizedQuery = query.trim();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentQuery = params.get("q") ?? "";

    if (window.location.pathname === "/search" && currentQuery) {
      window.requestAnimationFrame(() => setQuery(currentQuery));
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    async function loadCatalog() {
      try {
        const response = await fetch(`${getApiBase()}/products`, { cache: "no-store" });
        if (!response.ok) return;
        const payload = (await response.json()) as { products?: ShopCatalogProduct[] };
        if (mounted && payload.products?.length) {
          setCatalog(payload.products);
        }
      } catch {
        // Static catalog stays available when the live API is not connected.
      }
    }

    loadCatalog();
    return () => {
      mounted = false;
    };
  }, []);

  const trendingProducts = useMemo(
    () =>
      trendingSlugs
        .map((slug) => catalog.find((product) => product.slug === slug))
        .filter(Boolean) as ShopCatalogProduct[],
    [catalog],
  );

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return trendingProducts;
    }

    return getSearchSuggestionsFromCatalog(catalog, normalizedQuery, 8);
  }, [catalog, normalizedQuery, trendingProducts]);
  const heading = normalizedQuery ? "Suggested Products" : "Trending Products";

  return (
    <div className={isOpen ? "product-search is-open" : "product-search"} id="search">
      <form action="/search">
        <input type="hidden" name="type" value="products" />
        <label>
          <span className="product-search-icon" aria-hidden="true" />
          <input
            aria-label="Search products"
            name="q"
            onBlur={() => window.setTimeout(() => setIsOpen(false), 140)}
            onChange={(event) => setQuery(event.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="Search..."
            type="search"
            value={query}
          />
        </label>
        {query ? (
          <button aria-label="Clear search" className="product-search-clear" onClick={() => setQuery("")} type="button">
            x
          </button>
        ) : null}
      </form>
      {isOpen ? (
        <div className="product-search-results">
          <p>{heading}</p>
          {results.length ? (
            results.map((product) => (
              <a href={product.productHref} key={product.slug}>
                <img src={product.image} alt="" />
                <span>
                  <strong>{product.title}</strong>
                  <small>{getProductMeta(product)}</small>
                </span>
              </a>
            ))
          ) : (
            <span className="product-search-empty">No products found</span>
          )}
        </div>
      ) : null}
    </div>
  );
}
