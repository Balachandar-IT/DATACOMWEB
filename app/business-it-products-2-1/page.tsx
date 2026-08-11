import { CookieSettings } from "../cookie-settings";
import { NavMoreMenu } from "../nav-more-menu";
import { ProductSearch } from "../product-search";
import { SiteFooter } from "../site-footer";
import { SmartChat } from "../smart-chat";

const dataCenterNavItems = [
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

const dataCenterCategories = [
  {
    image: "/assets/data-center-cat-servers.jpg",
    title: "Servers",
    text: "Enterprise servers for computing and virtualization.",
  },
  {
    image: "/assets/data-center-cat-storage.png",
    title: "Storage Solutions",
    text: "Secure storage and backup systems.",
  },
  {
    image: "/assets/data-center-cat-racks.jpg",
    title: "Server Racks & Cabinets",
    text: "Durable racks for organizing server infrastructure.",
  },
  {
    image: "/assets/data-center-cat-networking.jpg",
    title: "Networking Equipment",
    text: "Switches and routers for stable connectivity.",
  },
  {
    image: "/assets/data-center-cat-power.jpg",
    title: "Power & UPS Solutions",
    text: "Reliable power protection for IT systems.",
  },
  {
    image: "/assets/data-center-cat-cabling.jpg",
    title: "Cabling & Infrastructure",
    text: "Structured cabling for organized connections.",
  },
];

const dataCenterProducts = [
  ["/assets/business-cat-laptops.png", 'HP EliteBook 8 G1i 14" AI PC'],
  ["/assets/business-product-12u-600.png", "Tough CX Series Vertical Cable Management"],
  ["/assets/business-product-9u-450.png", 'Tough Cable Management for 19" Server Rack'],
  [
    "/assets/business-product-15u.png",
    "Tough CX 42U, 800mm x 1200mm(D)- 4 Com Equipment Rack-Bi-Fold PerforatedDoor",
  ],
  [
    "/assets/business-product-12u-450.png",
    "Tough CX 42U, 800mm x 1200mm(D)- 2 Com Equipment Rack-Bi-Fold PerforatedDoor",
  ],
  [
    "/assets/business-product-6u.png",
    "Tough CX 21U, 800mm x 1000mm(D)--Equipment Rack - Bi-Fold PerforatedDoor",
  ],
];

export default function DataCenterProductsPage() {
  return (
    <main className="data-center-page">
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
          {dataCenterNavItems.map(([item, href]) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="services-nav-link" key={item} />
            ) : (
              <a
                className={
                  item === "Data Center Products"
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

      <section className="data-center-hero">
        <div>
          <h1>
            Reliable Data Center
            <br />
            Hardware for Modern IT
            <br />
            Infrastructure
          </h1>
          <p>
            Build and scale your IT infrastructure with enterprise-grade servers,
            storage, and networking equipment from trusted global brands.
          </p>
        </div>
      </section>

      <section className="data-center-about">
        <div>
          <span className="services-pill">About Data Center Products</span>
          <p>
            Our <strong>Data Center product range</strong> supports businesses
            that require <strong>high-performance computing, secure storage,</strong>
            and <strong>reliable network infrastructure.</strong>
          </p>
          <p>
            From <strong>servers and storage systems</strong> to{" "}
            <strong>server racks and power management solutions,</strong> we
            provide the <strong>essential hardware</strong> needed to build and
            maintain <strong>efficient data center environments.</strong>
          </p>
        </div>
        <img src="/assets/data-center-about.png" alt="" />
      </section>

      <section className="data-center-categories" id="product-category">
        <span className="services-pill">Product Categories</span>
        <h2>Find What Your Business Needs</h2>
        <div className="business-category-grid">
          {dataCenterCategories.map((category) => (
            <article key={category.title}>
              <img src={category.image} alt="" />
              <h3>{category.title}</h3>
              <p>{category.text}</p>
              <a href="#all-products">Shop Now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="data-center-solutions">
        <div className="data-center-solutions-copy">
          <span className="services-pill">Data Center Products</span>
          <h2>
            Who Our Data Center
            <br />
            Solutions Are For
          </h2>
          <p>Our data center solutions are ideal for:</p>
          <ul>
            <li>Enterprise IT environments</li>
            <li>Data centers and server rooms</li>
            <li>Cloud and hosting providers</li>
            <li>Businesses managing large-scale data systems</li>
            <li>Companies expanding their IT infrastructure</li>
          </ul>
          <p>
            Whether you are setting up a new office or upgrading existing
            equipment, we help you choose the right products for your business
            needs.
          </p>
        </div>
        <img src="/assets/data-center-solutions.jpg" alt="" />
      </section>

      <section className="data-center-products" id="all-products">
        <h2>All Products</h2>
        <div className="data-center-product-row">
          {dataCenterProducts.map(([image, title]) => (
            <article key={title}>
              <img src={image} alt="" />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="data-center-cta">
        <div>
          <h2>
            Build a Reliable Data
            <br />
            Center Infrastructure
          </h2>
          <p>
            Explore our full range of data center products and find the right
            solutions for your business.
          </p>
          <a href="#all-products">Learn More</a>
        </div>
      </section>

      <SiteFooter />
      <SmartChat servicePage />
      <CookieSettings servicePage />
    </main>
  );
}
