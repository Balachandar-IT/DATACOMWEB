import { CookieSettings } from "../cookie-settings";
import { NavMoreMenu } from "../nav-more-menu";
import { ProductSearch } from "../product-search";
import { SiteFooter } from "../site-footer";
import { SmartChat } from "../smart-chat";

const promotionNavItems = [
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

export default function PromotionPage() {
  return (
    <main className="promotion-page">
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
          {promotionNavItems.map(([item, href]) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="services-nav-link" key={item} />
            ) : (
              <a
                className={item === "Promotion" ? "services-nav-link active" : "services-nav-link"}
                href={href}
                key={item}
              >
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      <section className="promotion-hero">
        <h1>Current Deals &amp;<br />Promotions</h1>
        <p>
          Don't compromise on power. Take advantage of special offers across our
          entire business IT and AI infrastructure lineup. Secure trusted hardware
          for your team today.
        </p>
      </section>

      <section className="promotion-ai-showcase" aria-label="AI infrastructure built for business">
        <img
          src="/assets/promotion-ai-infrastructure-hq.png"
          alt="AI infrastructure built for business"
        />
      </section>

      <section className="promotion-feature">
        <div className="promotion-feature-copy">
          <img src="/assets/promotion-workstation.png" alt="" />
          <h2>Maximum Compute<br />Power. Zero Lag.</h2>
          <p>
            Bring ultimate processing speeds directly to your desk. From intensive
            data science workflows to complex deep learning simulations, Datacom
            builds the trusted hardware your team needs to innovate faster.
          </p>
          <a href="/contact-10">Upgrade Your Workstation</a>
        </div>
        <img
          className="promotion-sale-card"
          src="/assets/promotion-sale.png"
          alt="Exclusive AI workstation sale"
        />
      </section>

      <SiteFooter />
      <SmartChat servicePage />
      <CookieSettings servicePage />
    </main>
  );
}
