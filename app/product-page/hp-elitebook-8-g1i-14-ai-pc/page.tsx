import { SimplePageShell } from "../../simple-page-shell";
import { ProductDetailView } from "../../product-detail-view";
import { shopCatalogBySlug } from "../../shop-catalog";

const product = shopCatalogBySlug["hp-elitebook-8-g1i-14-ai-pc"];

export default function HpEliteBookProductPage() {
  return (
    <SimplePageShell active="Shop">
      <ProductDetailView
        cartHref={`/cart-page?slug=${product.slug}`}
        hasLaptopOptions
        image={product.image}
        images={product.galleryImages}
        options={product.options}
        price={product.price}
        title={product.title}
      />
    </SimplePageShell>
  );
}
