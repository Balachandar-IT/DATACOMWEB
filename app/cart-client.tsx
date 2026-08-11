"use client";

import { useState } from "react";
import { buildCheckoutUrl, formatSgdAmount, getUnitPriceAmount, type CartOptionSelection } from "./cart-utils";
import { QuantityStepper } from "./quantity-stepper";
import type { ShopCatalogProduct } from "./shop-catalog";

type CartClientProps = {
  initialQuantity: number;
  product: ShopCatalogProduct;
  selectedOptions: CartOptionSelection[];
};

export function CartClient({ initialQuantity, product, selectedOptions }: CartClientProps) {
  const [isRemoved, setIsRemoved] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);
  const unitPrice = getUnitPriceAmount(product, selectedOptions);
  const totalPrice = formatSgdAmount(isRemoved ? 0 : unitPrice * quantity);
  const checkoutHref = buildCheckoutUrl(product.slug, quantity, selectedOptions);

  return (
    <section className="cart-page" aria-label="Shopping cart">
      <div className="cart-main">
        <h1>My cart</h1>
        {isRemoved ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <a href="/shop">Continue Browsing</a>
          </div>
        ) : (
          <article className="cart-line-item">
            <img src={product.image} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{formatSgdAmount(unitPrice)}</p>
              {selectedOptions.map((option) => (
                <p key={option.name}>
                  {option.name}: {option.value}
                </p>
              ))}
            </div>
            <QuantityStepper ariaLabel={`Quantity for ${product.title}`} onChange={setQuantity} value={quantity} />
            <strong>{totalPrice}</strong>
            <button className="cart-remove" type="button" aria-label="Remove item" onClick={() => setIsRemoved(true)}>
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm-1 6h2v10H8V9Zm6 0h2v10h-2V9Zm-9 0h2l1 12h8l1-12h2l-1.2 14H6.2L5 9Z" />
              </svg>
            </button>
          </article>
        )}
        {!isRemoved ? (
          <>
            <a className="cart-promo-link" href="#promo">Enter a promo code</a>
            <a className="cart-note-link" href="#note">Add a note</a>
          </>
        ) : null}
      </div>

      <aside className="cart-summary" aria-label="Order summary">
        <h2>Order summary</h2>
        <div>
          <span>Subtotal</span>
          <span>{totalPrice}</span>
        </div>
        <div>
          <span>Delivery</span>
          <span>--</span>
        </div>
        <a href="#delivery">Estimate Delivery &amp; Taxes</a>
        <div className="cart-total">
          <span>Total</span>
          <strong>{totalPrice}</strong>
        </div>
        {isRemoved ? (
          <span className="cart-checkout is-disabled">Checkout</span>
        ) : (
          <>
            <a className="cart-checkout" href={checkoutHref}>Checkout</a>
            <a className="cart-paypal" href={checkoutHref}>PayPal Checkout</a>
          </>
        )}
        <small>Secure Checkout</small>
      </aside>
    </section>
  );
}
