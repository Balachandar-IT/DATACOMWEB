export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2>Datacom Enterprise Pte Ltd</h2>
          <img
            src="/assets/datacom-logo-white.png"
            alt="Datacom Enterprise Pte Ltd"
          />
          <p>
            We provide trusted IT products and services - servers, storage,
            networking, and support - tailored to meet business needs across
            industries.
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer sitemap">
          <h3>Sitemap</h3>
          <div className="footer-link-columns">
            <div>
              <a href="/">Home</a>
              <a href="/home/services">Services</a>
              <a href="/shop">Shop</a>
              <a href="/explore">Explore</a>
              <a href="/careers">Careers</a>
              <a href="/contact-10">Contact Us</a>
            </div>
            <div>
              <a href="/business-it-products-2">Business IT Products</a>
              <a href="/business-it-products-2-1">Data Center Products</a>
              <a href="/s-projects-side-by-side">Tough Server Racks</a>
              <a href="/ai-workstations">AI Workstation</a>
            </div>
          </div>
        </nav>

        <div className="footer-policy">
          <h3>Policy</h3>
          <a href="/return-and-refund-policy">Return and Refund</a>
          <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          <a href="/privacy-policy">Privacy &amp; Policy</a>
          <div className="social-row" aria-label="Social links">
            <img
              src="/assets/social-icons-white.png"
              alt="LinkedIn, WhatsApp, Facebook, and Instagram"
            />
          </div>
        </div>

        <address className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <img src="/assets/footer-icon-location.png" alt="" aria-hidden="true" />
            <p>
              <strong>Location:</strong>
              No. 20 Lorong 21A Geylang<br />
              Datacom Enterprise Building.<br />
              Singapore 388430
            </p>
          </div>
          <div className="contact-item">
            <img src="/assets/footer-icon-phone.png" alt="" aria-hidden="true" />
            <p>
              <strong>Contact number:</strong>
              +65 6844 4272
            </p>
          </div>
          <div className="contact-item">
            <img src="/assets/footer-icon-whatsapp-blue.svg" alt="" aria-hidden="true" />
            <p>
              <strong>WhatsApps:</strong>
              +65 8939 3191
            </p>
          </div>
          <div className="contact-item">
            <img src="/assets/footer-icon-mail.png" alt="" aria-hidden="true" />
            <p>
              <strong>Email Address:</strong>
              info@dcom.com.sg
            </p>
          </div>
        </address>

        <div className="payment-row">
          <span>We accept the following paying methods</span>
          <div className="payment-icons" aria-label="Accepted payment methods">
            <img src="/assets/payments/visa.png" alt="Visa" />
            <img src="/assets/payments/mastercard.png" alt="Mastercard" />
            <img src="/assets/payments/amex.png" alt="American Express" />
            <img src="/assets/payments/unionpay.png" alt="UnionPay" />
            <img src="/assets/payments/jcb.png" alt="JCB" />
            <img src="/assets/payments/diners.png" alt="Diners Club" />
            <img src="/assets/payments/discover.png" alt="Discover" />
            <img src="/assets/payments/paypal.png" alt="PayPal" />
          </div>
        </div>

        <small>&copy; 2026 by Datacom. Ecommerce Website</small>
      </div>
    </footer>
  );
}
