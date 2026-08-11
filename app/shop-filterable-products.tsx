"use client";

import { useMemo, useState } from "react";
import { parseSgdAmount } from "./cart-utils";
import { ShopCartControls } from "./shop-cart-controls";
import { shopCatalog, shopCatalogPages, type ShopCatalogProduct } from "./shop-catalog";

const categoryFilters = [
  "All",
  "Lenovo",
  "DELL",
  "LCD Stand",
  "Tough PDU",
  "Laptop",
  "HP",
  "Tough Server Rack",
  "Tough Wall Mount Cabinet",
  "Tough Rack Accessories",
  "Tough cables and adapters",
];

const collapsedFilters = [
  "Price",
  "Color",
  "Dimension",
  "Door",
  "Material",
  "Processor",
  "Rack-U",
  "Sliding Rail Kit",
  "Storage",
];

const filterOptions: Record<string, string[]> = {
  Dimension: ["1000mm", "600mm", "800mm"],
  Door: ["Glass", "Mesh", "Perforated Door"],
  Material: ["Aluminum"],
  Processor: ["Core Ultra 5", "Core Ultra 7"],
  "Rack-U": ["1U", "2U"],
  "Sliding Rail Kit": ["None", "RKS-01", "RKS-02"],
  Storage: ["1TB SSD", "512GB SSD"],
};

const filterColors = ["Black", "Blue", "Silver", "Graphite", "White", "Light grey"];
const maxPrice = 70719;

type SelectedFilters = Record<string, string[]>;

type ShopFilterableProductsProps = {
  activePage: string;
};

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "");

const buildProductHref = (product: ShopCatalogProduct) => product.productHref || `/product-page/${product.slug}`;

const productText = (product: ShopCatalogProduct) =>
  normalize(`${product.title} ${product.options.map((option) => option.values.join(" ")).join(" ")}`);

const productHasOption = (product: ShopCatalogProduct, filterName: string, value: string) => {
  const option = product.options.find((item) => item.name.toLowerCase() === filterName.toLowerCase());
  const normalizedValue = normalize(value);

  if (option?.values.some((item) => normalize(item) === normalizedValue)) {
    return true;
  }

  if (filterName === "Rack-U") {
    return false;
  }

  return productText(product).includes(normalizedValue);
};

const productMatchesCategory = (product: ShopCatalogProduct, category: string) => {
  const title = product.title.toLowerCase();

  if (category === "All") {
    return true;
  }

  if (category === "Lenovo") {
    return /lenovo|thinkpad/.test(title);
  }

  if (category === "DELL") {
    return /dell|latitude|optiplex|poweredge/.test(title);
  }

  if (category === "LCD Stand") {
    return /lcd|monitor stand/.test(title);
  }

  if (category === "Tough PDU") {
    return /pdu|power distribution|socket|outlet|iec|c13|c19/.test(title);
  }

  if (category === "Laptop") {
    return /laptop|elitebook|thinkpad|latitude|notebook/.test(title);
  }

  if (category === "HP") {
    return /\bhp\b|hpe|elitebook|proliant/.test(title);
  }

  if (category === "Tough Server Rack") {
    return /equipment rack|server rack|tough cx \d+u|cabinet/.test(title) && !/wall mount/.test(title);
  }

  if (category === "Tough Wall Mount Cabinet") {
    return /wall mount/.test(title);
  }

  if (category === "Tough Rack Accessories") {
    return /rack accessor|cable management|sliding rail|rack shelf|fan|blank panel/.test(title);
  }

  if (category === "Tough cables and adapters") {
    return /cable|adapter/.test(title);
  }

  return true;
};

const hasActiveOptionFilters = (selectedFilters: SelectedFilters) =>
  Object.values(selectedFilters).some((values) => values.length > 0);

const productMatchesFilters = (
  product: ShopCatalogProduct,
  category: string,
  priceMax: number,
  selectedFilters: SelectedFilters,
) => {
  if (!productMatchesCategory(product, category)) {
    return false;
  }

  if (parseSgdAmount(product.price) > priceMax) {
    return false;
  }

  return Object.entries(selectedFilters).every(([filterName, selectedValues]) => {
    if (!selectedValues.length) {
      return true;
    }

    return selectedValues.some((value) => productHasOption(product, filterName, value));
  });
};

export function ShopFilterableProducts({ activePage }: ShopFilterableProductsProps) {
  const [category, setCategory] = useState("All");
  const [priceMax, setPriceMax] = useState(maxPrice);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const activePageIndex = Number(activePage) - 1;
  const pageProducts = shopCatalogPages[activePageIndex] ?? shopCatalogPages[0];
  const isFiltering = category !== "All" || priceMax < maxPrice || hasActiveOptionFilters(selectedFilters);
  const products = useMemo(() => {
    if (!isFiltering) {
      return pageProducts;
    }

    return shopCatalog.filter((product) => productMatchesFilters(product, category, priceMax, selectedFilters));
  }, [category, isFiltering, pageProducts, priceMax, selectedFilters]);

  const previousHref =
    activePage === "7"
      ? "/shop?page=6"
      : activePage === "6"
        ? "/shop?page=5"
        : activePage === "5"
          ? "/shop?page=4"
          : activePage === "4"
            ? "/shop?page=3"
            : activePage === "3"
              ? "/shop?page=2"
              : "/shop";
  const nextHref =
    activePage === "1"
      ? "/shop?page=2"
      : activePage === "2"
        ? "/shop?page=3"
        : activePage === "3"
          ? "/shop?page=4"
          : activePage === "4"
            ? "/shop?page=5"
            : activePage === "5"
              ? "/shop?page=6"
              : "/shop?page=7";

  const toggleFilter = (filterName: string, value: string) => {
    setSelectedFilters((current) => {
      const currentValues = current[filterName] ?? [];
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...current,
        [filterName]: nextValues,
      };
    });
  };

  const clearFilters = () => {
    setCategory("All");
    setPriceMax(maxPrice);
    setSelectedFilters({});
  };

  return (
    <section className="shop-page" aria-label="Datacom shop products">
      <aside className="shop-filters" aria-label="Product filters">
        <h1>Filter by</h1>
        <details className="shop-filter-block" open>
          <summary>
            <span>Category</span>
            <span className="shop-filter-icon" aria-hidden="true">+</span>
          </summary>
          <div className="shop-category-list">
            {categoryFilters.map((filter) => (
              <button
                className={category === filter ? "is-active" : undefined}
                key={filter}
                onClick={() => setCategory(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </details>
        {collapsedFilters.map((filter) => (
          <details className="shop-filter-row" defaultOpen={filter === "Price"} key={filter}>
            <summary>
              <span>{filter}</span>
              <span className="shop-filter-icon" aria-hidden="true">+</span>
            </summary>
            {filter === "Price" ? (
              <div className="shop-price-filter" aria-label="Price range">
                <input
                  aria-label="Maximum price"
                  max={maxPrice}
                  min="0"
                  onChange={(event) => setPriceMax(Number(event.target.value))}
                  step="1"
                  type="range"
                  value={priceMax}
                />
                <div className="shop-price-labels">
                  <span>SGD 0</span>
                  <span>SGD {priceMax.toLocaleString("en-SG")}</span>
                </div>
              </div>
            ) : null}
            {filter === "Color" ? (
              <div className="shop-color-filter" aria-label="Color options">
                {filterColors.map((color) => {
                  const isActive = selectedFilters.Color?.includes(color) ?? false;

                  return (
                    <button
                      aria-label={color}
                      aria-pressed={isActive}
                      className={`shop-color-dot ${color.toLowerCase().replaceAll(" ", "-")} ${
                        isActive ? "is-active" : ""
                      }`}
                      key={color}
                      onClick={() => toggleFilter("Color", color)}
                      type="button"
                    />
                  );
                })}
              </div>
            ) : null}
            {filterOptions[filter] ? (
              <div className="shop-checkbox-filter">
                {filterOptions[filter].map((option) => (
                  <label key={option}>
                    <input
                      checked={selectedFilters[filter]?.includes(option) ?? false}
                      onChange={() => toggleFilter(filter, option)}
                      type="checkbox"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            ) : null}
          </details>
        ))}
        {isFiltering ? (
          <button className="shop-clear-filters" onClick={clearFilters} type="button">
            Clear filters
          </button>
        ) : null}
      </aside>

      <section className="shop-products" id="shop-products" aria-label="Products">
        {products.length ? (
          <div className="shop-product-grid">
            {products.map((product) => {
              const productHref = buildProductHref(product);
              const hoverImage = product.hoverImage ?? product.image;

              return (
                <article className="shop-product" key={product.slug}>
                  <div className="shop-image-wrap">
                    {product.sale || product.ribbon ? (
                      <span className="shop-sale">{product.ribbon ?? "SALE"}</span>
                    ) : null}
                    <a className="shop-image-link has-hover-image" href={productHref} aria-label={`View ${product.title}`}>
                      <img className="shop-image-main" src={product.image} alt={product.title} />
                      <img className="shop-image-hover" src={hoverImage} alt="" aria-hidden="true" />
                      <span className="shop-quick-view">Quick View</span>
                    </a>
                  </div>
                  <h2>
                    <a href={productHref}>{product.title}</a>
                  </h2>
                  <p className="shop-price">
                    {product.comparePrice ? <span className="shop-price-old">{product.comparePrice}</span> : null}
                    <span>{product.price}</span>
                  </p>
                  <p className="shop-tax">Excluding Sales Tax</p>
                  <ShopCartControls slug={product.slug} stock={product.stock} title={product.title} />
                </article>
              );
            })}
          </div>
        ) : (
          <div className="shop-no-results">
            <p>No products found.</p>
            <button onClick={clearFilters} type="button">
              Clear filters
            </button>
          </div>
        )}

        {!isFiltering ? (
          <nav className="shop-pagination" aria-label="Product pagination">
            <a href={previousHref} aria-label="Previous page">
              &lt;
            </a>
            <a className={activePage === "1" ? "active" : undefined} href="/shop">
              1
            </a>
            {activePage === "4" || activePage === "5" || activePage === "6" || activePage === "7" ? <span>...</span> : null}
            {activePage === "1" || activePage === "2" || activePage === "3" ? (
              <>
                <a className={activePage === "2" ? "active" : undefined} href="/shop?page=2">
                  2
                </a>
                <a className={activePage === "3" ? "active" : undefined} href="/shop?page=3">
                  3
                </a>
              </>
            ) : null}
            {activePage === "4" ? (
              <a className="active" href="/shop?page=4">
                4
              </a>
            ) : null}
            {activePage === "5" ? (
              <>
                <a className="active" href="/shop?page=5">
                  5
                </a>
                <a href="/shop?page=6">6</a>
              </>
            ) : null}
            {activePage === "6" ? (
              <>
                <a href="/shop?page=5">5</a>
                <a className="active" href="/shop?page=6">
                  6
                </a>
              </>
            ) : null}
            {activePage === "7" ? (
              <>
                <a href="/shop?page=5">5</a>
                <a href="/shop?page=6">6</a>
              </>
            ) : null}
            {activePage === "1" || activePage === "2" || activePage === "3" || activePage === "4" ? <span>...</span> : null}
            <a className={activePage === "7" ? "active" : undefined} href="/shop?page=7">
              7
            </a>
            <a href={nextHref} aria-label="Next page">
              &gt;
            </a>
          </nav>
        ) : null}
      </section>
    </section>
  );
}
