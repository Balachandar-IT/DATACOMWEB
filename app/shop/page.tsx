import { ShopFilterableProducts } from "../shop-filterable-products";
import { SimplePageShell } from "../simple-page-shell";

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

export default function ShopPage({ searchParams }: ShopPageProps) {
  return (
    <SimplePageShell active="Shop">
      <ShopFilterableProducts activePage={getActivePage(searchParams?.page)} />
    </SimplePageShell>
  );
}
