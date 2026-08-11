import type { ShopCatalogProduct } from "./shop-catalog";

export type CartOptionSelection = {
  name: string;
  value: string;
};

export const parseSgdAmount = (price: string) => {
  const amount = Number(price.replace(/[^0-9.]/g, ""));

  return Number.isFinite(amount) ? amount : 0;
};

export const formatSgdAmount = (amount: number) =>
  `SGD ${amount.toLocaleString("en-SG", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  })}`;

export const getDefaultOptionValue = (option: { name: string; values: string[] }) =>
  option.name.toLowerCase() === "processor" ? option.values.at(-1) ?? "" : option.values[0] ?? "";

export const getDefaultSelections = (product: ShopCatalogProduct) =>
  product.options
    .filter((option) => option.values.length)
    .slice(0, 2)
    .map((option) => ({
      name: option.name,
      value: getDefaultOptionValue(option),
    }));

export const getCartSelectionsFromSearch = (
  product: ShopCatalogProduct,
  searchParams?: Record<string, string | undefined>,
) =>
  product.options
    .filter((option) => option.values.length)
    .slice(0, 2)
    .map((option) => ({
      name: option.name,
      value: searchParams?.[`option_${option.name}`] ?? getDefaultOptionValue(option),
    }));

export const getCartQuantityFromSearch = (quantity?: string) => {
  const parsedQuantity = Number(quantity);

  return Number.isFinite(parsedQuantity) && parsedQuantity > 0 ? Math.floor(parsedQuantity) : 1;
};

export const getUnitPriceAmount = (product: ShopCatalogProduct, selections: CartOptionSelection[]) => {
  const basePrice = parseSgdAmount(product.price);
  const selectedStorage = selections.find((selection) => selection.name.toLowerCase() === "storage")?.value;

  if (product.slug === "hp-elitebook-8-g1i-14-ai-pc" && selectedStorage === "1TB SSD") {
    return 4409;
  }

  return basePrice;
};

export const buildCartUrl = (
  slug: string,
  quantity: number,
  selections: CartOptionSelection[] = [],
  pathname = "/cart-page",
) => {
  const params = new URLSearchParams({
    qty: String(quantity),
    slug,
  });

  selections.forEach((selection) => {
    params.set(`option_${selection.name}`, selection.value);
  });

  return `${pathname}?${params.toString()}`;
};

export const buildCheckoutUrl = (slug: string, quantity: number, selections: CartOptionSelection[] = []) => {
  const params = new URLSearchParams({
    checkoutId: "ca727402-59ab-46c8-a7f1-8e7389be0db2",
    qty: String(quantity),
    slug,
  });

  selections.forEach((selection) => {
    params.set(`option_${selection.name}`, selection.value);
  });

  return `/checkout?${params.toString()}`;
};
