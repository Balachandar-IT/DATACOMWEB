import { ShopFilterableProducts } from "../shop-filterable-products";
import { SimplePageShell } from "../simple-page-shell";
import { getLiveCatalog, getLiveCatalogPages } from "../live-products";

type ShopPageProps = {
  searchParams?: {
    page?: string;
  };
};

const getActivePage = (page?: string) => {
  if (page === "7" || page === "6" || page === "5" || page === "4" || page === "3" || page === "2") {
    return page;
  }

  return "1";
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const [catalog, catalogPages] = await Promise.all([getLiveCatalog(), getLiveCatalogPages()]);

  return (
    <SimplePageShell active="Shop">
      <ShopFilterableProducts activePage={getActivePage(searchParams?.page)} catalog={catalog} catalogPages={catalogPages} />
    </SimplePageShell>
  );
}
