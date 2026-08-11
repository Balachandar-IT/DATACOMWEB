"use client";

import { useState } from "react";
import { buildCartUrl } from "./cart-utils";
import { QuantityStepper } from "./quantity-stepper";

type ShopCartControlsProps = {
  slug: string;
  stock: "in" | "out";
  title: string;
};

export function ShopCartControls({ slug, stock, title }: ShopCartControlsProps) {
  const [quantity, setQuantity] = useState(1);

  if (stock === "out") {
    return <span className="shop-cart is-disabled">Out of Stock</span>;
  }

  return (
    <>
      <QuantityStepper ariaLabel={`Quantity for ${title}`} onChange={setQuantity} value={quantity} />
      <a className="shop-cart" href={buildCartUrl(slug, quantity)}>
        Add to Cart
      </a>
    </>
  );
}
