"use client";

import Link from "next/link";
import { useState } from "react";
import {
  buildCartUrl,
  buildCheckoutUrl,
  formatSgdAmount,
  getDefaultOptionValue,
  getUnitPriceAmount,
} from "./cart-utils";
import { QuantityStepper } from "./quantity-stepper";

type ProductOption = {
  name: string;
  values: string[];
};

type ProductDetailViewProps = {
  cartHref?: string;
  hasLaptopOptions?: boolean;
  image: string;
  images?: string[];
  options?: ProductOption[];
  price: string;
  stock?: "in" | "out";
  title: string;
};

const laptopOptions = [
  { name: "Processor", values: ["Core Ultra 5", "Core Ultra 7"] },
  { name: "Storage", values: ["512GB SSD", "1TB SSD"] },
];

export function ProductDetailView({
  cartHref = "/cart-page",
  hasLaptopOptions = false,
  image,
  images,
  options,
  price,
  stock = "in",
  title,
}: ProductDetailViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryImages = Array.from(new Set([...(images ?? []), image].filter(Boolean)));
  const activeImage = galleryImages[activeIndex] ?? galleryImages[0] ?? image;
  const productOptions =
    options?.filter((option) => option.values.length) ?? (hasLaptopOptions ? laptopOptions : []);
  const [quantity, setQuantity] = useState(1);
  const [selections, setSelections] = useState<Record<string, string>>(() =>
    Object.fromEntries(productOptions.map((option) => [option.name, getDefaultOptionValue(option)])),
  );
  const selectedOptions = productOptions.map((option) => ({
    name: option.name,
    value: selections[option.name] ?? getDefaultOptionValue(option),
  }));
  const slug = cartHref.match(/slug=([^&]+)/)?.[1] ?? "";
  const unitPrice = getUnitPriceAmount(
    {
      galleryImages: [],
      hoverImage: image,
      image,
      options: productOptions,
      price,
      productHref: "",
      quantity: true,
      sale: false,
      slug,
      stock: "in",
      title,
    },
    selectedOptions,
  );
  const totalPrice = formatSgdAmount(unitPrice * quantity);
  const viewCartHref = slug ? buildCartUrl(slug, quantity, selectedOptions) : cartHref;
  const buyNowHref = slug ? buildCheckoutUrl(slug, quantity, selectedOptions) : cartHref;
  const showAvailabilityNote =
    productOptions.some((option) => option.name.toLowerCase() === "color") &&
    !productOptions.some((option) => /processor|storage/i.test(option.name));
  const getColorClassName = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <>
      <section className="product-detail-page" aria-label={`${title} product details`}>
        <nav className="product-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <a href="/shop">Shop</a>
          <span>/</span>
          <span>{title}</span>
        </nav>

        <div className="product-nav-links" aria-label="Product navigation">
          <a href="/shop">&lt; Prev</a>
          <span>|</span>
          <a href="/shop">Next &gt;</a>
        </div>

        <div className="product-detail-grid">
          <div className={galleryImages.length > 1 ? "product-gallery" : "product-gallery no-thumbs"}>
            {galleryImages.length > 1 ? (
              <div className="product-thumbs" aria-label="Product images">
                {galleryImages.map((galleryImage, index) => (
                  <button
                    className={index === activeIndex ? "active" : ""}
                    type="button"
                    key={`${galleryImage}-${index}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${title} image ${index + 1}`}
                  >
                    <img
                      className="product-gallery-image"
                      src={galleryImage}
                      alt=""
                    />
                  </button>
                ))}
              </div>
            ) : null}
            <div className="product-main-image">
              <img
                className="product-gallery-image"
                src={activeImage}
                alt={title}
              />
            </div>
          </div>

          <section className="product-info">
            <h1>{title}</h1>
            <p className="product-detail-price">{price}</p>
            <p className="product-detail-tax">Excluding Sales Tax</p>
            {showAvailabilityNote ? (
              <div className="product-availability-note">
                <p>
                  <strong>Availability:</strong> {stock === "out" ? "Out of Stock" : "In Stock"}
                </p>
                <p>Please click the button below to enquire.</p>
                <a href="#product-info">Read more</a>
              </div>
            ) : null}

            <div className="product-options">
              {productOptions.map((option) => (
                <fieldset key={option.name}>
                  <legend>{option.name} *</legend>
                  {option.values.map((value) => (
                    <label className={option.name.toLowerCase() === "color" ? "product-color-option" : undefined} key={value}>
                      <input
                        checked={(selections[option.name] ?? getDefaultOptionValue(option)) === value}
                        name={option.name}
                        onChange={() =>
                          setSelections((currentSelections) => ({
                            ...currentSelections,
                            [option.name]: value,
                          }))
                        }
                        type="radio"
                      />
                      {option.name.toLowerCase() === "color" ? (
                        <span className={`product-color-swatch ${getColorClassName(value)}`} title={value}>
                          <span className="sr-only">{value}</span>
                        </span>
                      ) : (
                        <span>{value}</span>
                      )}
                    </label>
                  ))}
                </fieldset>
              ))}

              <div>
                <span className="product-option-title">Quantity *</span>
                <QuantityStepper onChange={setQuantity} value={quantity} />
              </div>
            </div>

            <a className="product-add-cart" href="#cart-added">Add to Cart</a>
            <a className="product-buy-now" href={buyNowHref}>Buy Now</a>
          </section>
        </div>
      </section>

      <section className="cart-drawer" id="cart-added" aria-label="Cart">
        <div className="cart-drawer-panel">
          <header>
            <h2>Cart <span>(1 item)</span></h2>
            <a href="#" aria-label="Close cart">x</a>
          </header>
          <div className="cart-drawer-item">
            <img src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{formatSgdAmount(unitPrice)}</p>
              {productOptions.length ? (
                <>
                  {selectedOptions.slice(0, 2).map((option) => (
                    <p key={option.name}>
                      {option.name}: {option.value}
                    </p>
                  ))}
                </>
              ) : null}
              <QuantityStepper ariaLabel={`Quantity for ${title}`} onChange={setQuantity} value={quantity} />
            </div>
            <strong>{totalPrice}</strong>
          </div>
          <a className="cart-promo-link" href={viewCartHref}>Enter a promo code</a>
          <div className="cart-drawer-total">
            <span>Estimated total</span>
            <strong>{totalPrice}</strong>
          </div>
          <a className="cart-view-button" href={viewCartHref}>View Cart</a>
        </div>
      </section>
    </>
  );
}
