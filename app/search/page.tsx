import { getSearchSuggestions } from "../search-utils";
import { SimplePageShell } from "../simple-page-shell";

type SearchPageProps = {
  searchParams?: {
    q?: string;
    type?: string;
  };
};

const categoryFilters = ["Datacenter-Product", "HPE Server", "Lenovo"];

const getCategoryCount = (query: string, category: string) => {
  const products = getSearchSuggestions(query, 80);
  const normalizedCategory = category.toLowerCase();

  return products.filter((product) => {
    const title = product.title.toLowerCase();

    if (normalizedCategory === "hpe server") {
      return title.includes("hpe") || title.includes("proliant");
    }

    if (normalizedCategory === "lenovo") {
      return title.includes("lenovo") || title.includes("thinkpad");
    }

    return title.includes("synology") || title.includes("server") || title.includes("storage") || title.includes("ds423");
  }).length;
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams?.q?.trim() ?? "";
  const products = getSearchSuggestions(query, query ? 10 : 12);
  const resultLabel = `${products.length} ${products.length === 1 ? "product" : "products"}`;

  return (
    <SimplePageShell active="">
      <section className="search-page" aria-label="Search results">
        <form className="search-results-form" action="/search">
          <span className="search-results-icon" aria-hidden="true" />
          <input aria-label="Search products" defaultValue={query} name="q" type="search" />
          <input type="hidden" name="type" value="products" />
          {query ? (
            <a aria-label="Clear search" className="search-results-clear" href="/search?type=products">
              x
            </a>
          ) : null}
        </form>

        <nav className="search-tabs" aria-label="Search result types">
          <a className="active" href={`/search?q=${encodeURIComponent(query)}&type=products`}>
            Products ({products.length})
          </a>
          <a href={`/search?q=${encodeURIComponent(query)}&type=blog`}>Blog Posts (1)</a>
          <a href={`/search?q=${encodeURIComponent(query)}&type=pages`}>Other Pages (3)</a>
        </nav>

        <div className="search-results-layout">
          <aside className="search-result-filters" aria-label="Search filters">
            <h1>Filter by</h1>
            <details open>
              <summary>
                <span>Category</span>
                <span aria-hidden="true">-</span>
              </summary>
              <div>
                {categoryFilters.map((category) => (
                  <label key={category}>
                    <input type="checkbox" />
                    <span>{category}</span>
                    <small>{getCategoryCount(query, category)}</small>
                  </label>
                ))}
              </div>
            </details>
            <details>
              <summary>
                <span>Price</span>
                <span aria-hidden="true">+</span>
              </summary>
            </details>
          </aside>

          <section className="search-results-content" aria-label="Products">
            <div className="search-results-meta">
              <span>{resultLabel}</span>
              <label>
                Sort by:
                <select defaultValue="best">
                  <option value="best">Best Match</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </label>
            </div>

            {products.length ? (
              <div className="search-product-grid">
                {products.map((product) => {
                  const hoverImage =
                    product.hoverImage && product.hoverImage !== product.image
                      ? product.hoverImage
                      : product.galleryImages.find((image) => image !== product.image) ?? product.image;

                  return (
                    <article className="search-product-card" key={product.slug}>
                      <a href={product.productHref}>
                        {product.sale || product.ribbon ? <span className="search-product-ribbon">{product.ribbon ?? "SALE"}</span> : null}
                        <span className="search-product-image-wrap">
                          <img className="search-product-image-main" src={product.image} alt={product.title} />
                          {hoverImage !== product.image ? (
                            <img className="search-product-image-hover" src={hoverImage} alt="" aria-hidden="true" />
                          ) : null}
                        </span>
                        <h2>{product.title}</h2>
                        {product.stock === "out" ? (
                          <p>Out of stock</p>
                        ) : (
                          <>
                            <strong>{product.price}</strong>
                            <p>Excluding Sales Tax</p>
                          </>
                        )}
                      </a>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="search-empty-state">
                <p>No products found.</p>
                <a href="/shop">Continue Browsing</a>
              </div>
            )}
          </section>
        </div>
      </section>
    </SimplePageShell>
  );
}
