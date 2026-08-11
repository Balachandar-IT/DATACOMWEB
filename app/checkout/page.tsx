import {
  formatSgdAmount,
  getCartQuantityFromSearch,
  getCartSelectionsFromSearch,
  getUnitPriceAmount,
} from "../cart-utils";
import { SmartChat } from "../smart-chat";
import { shopCatalogBySlug } from "../shop-catalog";

const defaultProduct = shopCatalogBySlug["hp-elitebook-8-g1i-14-ai-pc"];

type CheckoutPageProps = {
  searchParams?: Record<string, string | undefined>;
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const product = (searchParams?.slug && shopCatalogBySlug[searchParams.slug]) || defaultProduct;
  const selectedOptions = getCartSelectionsFromSearch(product, searchParams);
  const quantity = getCartQuantityFromSearch(searchParams?.qty);
  const unitPrice = getUnitPriceAmount(product, selectedOptions);
  const totalPrice = formatSgdAmount(unitPrice * quantity);

  return (
    <main className="checkout-page">
      <header className="checkout-header">
        <a href="/" aria-label="Datacom home">
          <img src="/assets/datacom-logo.png" alt="Datacom Enterprise Pte Ltd" />
        </a>
        <span>CHECKOUT</span>
        <a href="/shop">Continue Browsing</a>
      </header>

      <div className="checkout-layout">
        <section className="checkout-form-column" aria-label="Checkout form">
          <div className="express-checkout">
            <span>Express checkout</span>
            <a href="#paypal">PayPal Checkout</a>
          </div>
          <div className="checkout-divider"><span>or</span></div>

          <form className="checkout-form">
            <h1>Customer details</h1>
            <label className="wide">
              Email *
              <input type="email" />
            </label>
            <label>
              First name *
              <input type="text" />
            </label>
            <label>
              Last name *
              <input type="text" />
            </label>
            <label className="wide">
              Phone *
              <input type="tel" />
            </label>
            <label className="wide">
              Company name *
              <input type="text" />
            </label>

            <h2>Delivery details</h2>
            <label className="wide">
              Country/Region *
              <select defaultValue="Singapore">
                <option>Singapore</option>
              </select>
            </label>
            <label className="wide">
              Address *
              <input type="text" />
            </label>
            <label className="wide">
              Address - line 2 *
              <input type="text" />
            </label>
            <label className="wide">
              City *
              <input type="text" />
            </label>
            <label className="wide">
              Region *
              <select defaultValue="">
                <option value="" disabled></option>
                <option>Central Singapore</option>
                <option>North East</option>
                <option>North West</option>
                <option>South East</option>
                <option>South West</option>
              </select>
            </label>
            <label className="wide">
              Zip / Postal code *
              <input type="text" />
            </label>
            <button className="checkout-continue" type="button">Continue</button>
          </form>

          <section className="checkout-collapsed">
            <h2>Delivery method</h2>
            <div className="checkout-payment-panel">
              <h2>Payment</h2>
              <label>
                Card number
                <input inputMode="numeric" placeholder="1234 1234 1234 1234" />
              </label>
              <div>
                <label>
                  Expiration date
                  <input inputMode="numeric" placeholder="MM / YY" />
                </label>
                <label>
                  Security code
                  <input inputMode="numeric" placeholder="CVC" />
                </label>
              </div>
              <label>
                Name on card
                <input type="text" />
              </label>
            </div>
          </section>
        </section>

        <aside className="checkout-summary" aria-label="Order summary">
          <h2>Order summary <span>({quantity} item)</span></h2>
          <div className="checkout-item">
            <div className="checkout-item-image">
              <img src={product.image} alt={product.title} />
              <span>{quantity}</span>
            </div>
            <div>
              <h3>{product.title}</h3>
              {selectedOptions.map((option) => (
                <p key={option.name}>
                  {option.name}: {option.value}
                </p>
              ))}
            </div>
            <strong>{totalPrice}</strong>
          </div>

          <details className="checkout-promo">
            <summary>Enter a promo code</summary>
            <div>
              <input placeholder="e.g., SAVE50" />
              <button type="button">Apply</button>
            </div>
          </details>

          <div className="checkout-cost-row">
            <span>Subtotal</span>
            <span>{totalPrice}</span>
          </div>
          <div className="checkout-cost-row">
            <span>Delivery</span>
            <span>--</span>
          </div>
          <div className="checkout-total-row">
            <span>Total</span>
            <strong>{totalPrice}</strong>
          </div>
        </aside>
      </div>

      <footer className="checkout-secure">Secure Checkout</footer>
      <SmartChat />
    </main>
  );
}
