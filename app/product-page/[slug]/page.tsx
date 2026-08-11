import { SimplePageShell } from "../../simple-page-shell";
import { ProductDetailView } from "../../product-detail-view";
import { shopCatalogBySlug } from "../../shop-catalog";
import { productStructuredData } from "../../seo-utils";

type ProductPageProps = {
  params?: {
    slug?: string;
  };
  searchParams?: {
    gallery?: string;
    title?: string;
    price?: string;
    image?: string;
  };
};

const fallbackImage =
  "https://static.wixstatic.com/media/1470f5_5f68f9571c514b3586a0a7999a12b9b9~mv2.png/v1/fit/w_900,h_900,q_90/file.png";

export default function GenericProductPage({ params, searchParams }: ProductPageProps) {
  const product = params?.slug ? shopCatalogBySlug[params.slug] : undefined;
  const title = product?.title ?? searchParams?.title ?? "Datacom Product";
  const price = product?.price ?? searchParams?.price ?? "SGD 0.00";
  const image = product?.image ?? searchParams?.image ?? fallbackImage;
  const images = product?.galleryImages ?? searchParams?.gallery?.split("|").filter(Boolean) ?? [image];
  const options = product?.options;
  const hasLaptopOptions = /elitebook|laptop|thinkpad|latitude/i.test(title);
  const structuredData = productStructuredData(product?.slug ?? params?.slug ?? "");

  return (
    <SimplePageShell active="Shop">
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      ) : null}
      <ProductDetailView
        cartHref={`/cart-page?slug=${product?.slug ?? params?.slug ?? ""}`}
        hasLaptopOptions={hasLaptopOptions}
        image={image}
        images={images}
        options={options}
        price={price}
        stock={product?.stock}
        title={title}
      />
    </SimplePageShell>
  );
}
