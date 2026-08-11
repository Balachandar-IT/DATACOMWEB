import { CookieSettings } from "../cookie-settings";
import { NavMoreMenu } from "../nav-more-menu";
import { ProductSearch } from "../product-search";
import { SiteFooter } from "../site-footer";
import { SmartChat } from "../smart-chat";

const businessNavItems = [
  ["Home", "/"],
  ["Services", "/home/services"],
  ["Shop", "/shop"],
  ["Business IT Products", "/business-it-products-2"],
  ["Promotion", "/promotion-1"],
  ["Data Center Products", "/business-it-products-2-1"],
  ["TOUGH Server Racks", "/s-projects-side-by-side"],
  ["AI Workstations", "/ai-workstations"],
  ["Explore", "/explore"],
  ["Careers", "/careers"],
  ["More", "#more"],
];

const productCategories = [
  {
    image: "/assets/business-cat-laptops.png",
    title: "Laptops & Desktops",
    text: "Business-ready devices for everyday work.",
  },
  {
    image: "/assets/business-cat-workstations.png",
    title: "Workstations",
    text: "High-performance systems for demanding tasks.",
  },
  {
    image: "/assets/business-cat-monitors.png",
    title: "Monitors & Displays",
    text: "Clear, efficient screens for daily productivity.",
  },
  {
    image: "/assets/business-cat-printers.png",
    title: "Printers & Scanners",
    text: "Reliable tools for document handling.",
  },
  {
    image: "/assets/business-cat-ups.png",
    title: "UPS & Power Solutions",
    text: "Power protection for critical equipment.",
  },
  {
    image: "/assets/business-cat-accessories.png",
    title: "Accessories & Peripherals",
    text: "Essential add-ons for work setups.",
  },
];

const productItems = [
  ["/assets/business-product-15u.png", "15U Wall Mount Cabinet", "450mm"],
  ["/assets/business-product-12u-600.png", "12U Wall Mount Cabinet", "600mm"],
  ["/assets/business-product-12u-450.png", "12U Wall Mount Cabinet", "450mm"],
  ["/assets/business-product-9u-450.png", "9U Wall Mount Cabinet", "450mm"],
  ["/assets/business-product-9u-600.png", "9U Wall Mount Cabinet", "600mm"],
  ["/assets/business-product-6u.png", "6U Wall Mount Cabinet", "600mm"],
];

export default function BusinessItProductsPage() {
  return (
    <main className="business-it-page">
      <header className="services-header" aria-label="Datacom Enterprise header">
        <a className="services-logo-link" href="/" aria-label="Datacom Enterprise home">
          <img
            className="services-logo"
            src="/assets/datacom-logo.png"
            alt="Datacom Enterprise Pte Ltd"
          />
        </a>
        <ProductSearch />
      </header>

      <nav className="services-nav" aria-label="Primary navigation">
        <div className="services-nav-inner">
          {businessNavItems.map(([item, href]) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="services-nav-link" key={item} />
            ) : (
              <a
                className={
                  item === "Business IT Products"
                    ? "services-nav-link active"
                    : "services-nav-link"
                }
                href={href}
                key={item}
              >
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      <section className="business-it-hero" aria-label="Business IT Products hero" />

      <section className="business-about">
        <div>
          <span className="services-pill">About Business IT Products</span>
          <p>
            <strong>Business IT products</strong> are essential tools that support
            <strong> daily operations, communication,</strong> and productivity in
            the workplace.
          </p>
          <p>
            From employee workstations to office peripherals and power solutions,
            our range of business-grade IT equipment is selected to deliver
            reliability, performance, and long-term value for modern business
            environments.
          </p>
        </div>
        <img src="/assets/business-about-illustration.png" alt="" />
      </section>

      <section className="business-categories" id="product-category">
        <span className="services-pill">Product Categories</span>
        <h2>Find What Your Business Needs</h2>
        <div className="business-category-grid">
          {productCategories.map((category) => (
            <article key={category.title}>
              <img src={category.image} alt="" />
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <a href="#all-products">Shop Now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="business-operations">
        <div className="business-operations-copy">
          <span className="services-pill">Business IT Solutions</span>
          <h2>Built for Everyday<br />Business Operations</h2>
          <p>
            Our Business IT products are selected to support reliable, efficient,
            and scalable workplace setups.
          </p>
          <h3>Key Uses:</h3>
          <ul>
            <li>Office and corporate environments</li>
            <li>SMEs and growing businesses</li>
            <li>Shared and co-working spaces</li>
            <li>Remote and hybrid work setups</li>
          </ul>
          <p>
            Whether you are setting up a new office or upgrading existing equipment,
            we help you choose the right products for your business needs.
          </p>
        </div>
        <img src="/assets/business-operations.png" alt="" />
      </section>

      <section className="business-products" id="all-products">
        <h2>All Products</h2>
        <div className="business-product-row">
          {productItems.map(([image, title, size]) => (
            <article key={`${title}-${size}`}>
              <img src={image} alt="" />
              <h3>{title}</h3>
              <p>{size}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta-image" aria-label="Empower your business with trusted IT solutions" />

      <SiteFooter />

      <SmartChat servicePage />
      <CookieSettings servicePage />
    </main>
  );
}
