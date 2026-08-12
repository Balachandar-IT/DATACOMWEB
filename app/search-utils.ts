import { shopCatalog, type ShopCatalogProduct } from "./shop-catalog";

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const relatedTermGroups = [
  ["ds423", "synology", "nas", "rackstation", "flashstation", "storage", "server", "hpe", "lenovo"],
  ["synology", "nas", "rackstation", "flashstation", "storage", "ds423", "rs822", "rs2423", "rs3621"],
  ["hpe", "proliant", "dl360", "dl380", "dl320", "server", "rackstation", "storage"],
  ["lenovo", "thinkpad", "laptop", "notebook", "hp", "dell"],
  ["hp", "elitebook", "laptop", "notebook", "lenovo", "dell"],
  ["rack", "tough", "cabinet", "server rack", "equipment rack", "rackstation", "cable management"],
  ["pdu", "power", "socket", "iec", "c13", "c19", "cable"],
];

const textForProduct = (product: ShopCatalogProduct) =>
  normalize(
    `${product.title} ${product.price} ${product.ribbon ?? ""} ${product.options
      .flatMap((option) => [option.name, ...option.values])
      .join(" ")}`,
  );

const getRelatedTerms = (queryWords: string[]) => {
  const relatedTerms = new Set(queryWords);

  for (const group of relatedTermGroups) {
    if (group.some((term) => queryWords.some((word) => term.includes(word) || word.includes(term)))) {
      group.forEach((term) => relatedTerms.add(term));
    }
  }

  return relatedTerms;
};

export const getSearchSuggestionsFromCatalog = (catalog: ShopCatalogProduct[], query: string, limit = 10) => {
  const normalizedQuery = normalize(query);
  const queryWords = normalizedQuery.split(" ").filter(Boolean);

  if (!queryWords.length) {
    return catalog.slice(0, limit);
  }

  const relatedTerms = getRelatedTerms(queryWords);

  return catalog
    .map((product) => {
      const text = textForProduct(product);
      let score = 0;

      if (text.includes(normalizedQuery)) {
        score += 80;
      }

      for (const word of queryWords) {
        if (text.includes(word)) {
          score += 35;
        }
      }

      for (const term of relatedTerms) {
        if (text.includes(term)) {
          score += 10;
        }
      }

      if (product.stock === "in") {
        score += 1;
      }

      return { product, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.product.title.localeCompare(b.product.title))
    .slice(0, limit)
    .map((item) => item.product);
};

export const getSearchSuggestions = (query: string, limit = 10) =>
  getSearchSuggestionsFromCatalog(shopCatalog, query, limit);

export const getProductMeta = (product: ShopCatalogProduct) => {
  const firstOption = product.options.find((option) => option.values.length);
  const availability = product.stock === "out" ? "Availability: Out of Stock" : "Availability: In Stock";

  if (!firstOption) {
    return availability;
  }

  return `${availability} - ${firstOption.values.slice(0, 2).join(", ")}`;
};
