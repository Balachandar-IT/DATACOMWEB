import { CartClient } from "../cart-client";
import { getCartQuantityFromSearch, getCartSelectionsFromSearch } from "../cart-utils";
import { shopCatalogBySlug } from "../shop-catalog";
import { SimplePageShell } from "../simple-page-shell";

type CartPageProps = {
  searchParams?: Record<string, string | undefined>;
};

const defaultProduct = shopCatalogBySlug["hp-elitebook-8-g1i-14-ai-pc"];

export default function CartPage({ searchParams }: CartPageProps) {
  const product = (searchParams?.slug && shopCatalogBySlug[searchParams.slug]) || defaultProduct;
  const selectedOptions = getCartSelectionsFromSearch(product, searchParams);
  const quantity = getCartQuantityFromSearch(searchParams?.qty);

  return (
    <SimplePageShell active="Shop">
      <CartClient initialQuantity={quantity} product={product} selectedOptions={selectedOptions} />
    </SimplePageShell>
  );
}
