"use client";

import { useEffect, useMemo, useState } from "react";
import { getProductMeta, getSearchSuggestions } from "./search-utils";
import { shopCatalog } from "./shop-catalog";

const trendingSlugs = [
  "hp-elitebook-8-g1i-14-ai-pc",
  "tough-cable-management-for-19-server-rack",
  "tough-cx-42u-800mm-x-1200mm-d-4-com-equipment-rack-bi-fold-perforateddoor",
  "tough-cx-series-vertical-cable-management",
];

const trendingProducts = trendingSlugs
  .map((slug) => shopCatalog.find((product) => product.slug === slug))
  .filter(Boolean);

export function ProductSearch() {
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

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return trendingProducts;
    }

    return getSearchSuggestions(normalizedQuery, 8);
  }, [normalizedQuery]);
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
