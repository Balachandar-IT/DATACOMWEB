import { CookieSettings } from "../cookie-settings";
import { NavMoreMenu } from "../nav-more-menu";
import { ProductSearch } from "../product-search";
import { SiteFooter } from "../site-footer";
import { SmartChat } from "../smart-chat";

const toughNavItems = [
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

const toughProducts = [
  {
    image: "/assets/tough-wall-mount.png",
    title: "1. TOUGH Wall Mount Cabinet",
    body:
      "Ideal for storing IT and networking devices. Available in 6U, 9U, 12U, and 15U sizes. Choose between:",
    groups: [
      ["Double Section Wall-Mounted Cabinets", "Mesh or Glass Door Cabinets", "Included Accessories: Door Lock, PDU, Fan"],
    ],
    fit: "Perfect for: Offices, small IT setups, and educational institutions",
  },
  {
    image: "/assets/tough-server-racks.png",
    title: "2. TOUGH Server Racks",
    body:
      "Our customizable floor-standing server racks come in 18U, 21U, 27U, 31U, 36U, 42U, 45U, and 48U options.",
    groups: [
      ["Shelving, top and side panels", "Security locks, ventilation fans, and cable management", "Front door options: Perforated or Glass"],
      ["6-way PDU (13A CE Approved)", "Castor Wheels (Set of 4)", "Fan Tray (4 Ventilation Fans)", "Fixed Tray with Ventilation Slots", "Side Door Lock, Mounting Channel, Cage Nuts & Screws"],
    ],
    fit: "Ideal for: Data centers, corporate IT rooms, and industrial operations",
  },
  {
    image: "/assets/tough-mobile-cart.png",
    title: "3. TOUGH Mobile Charging Cart",
    body:
      "Provides secure storage, centralized charging, and easy mobility for up to 30 devices.",
    groups: [
      ["Fixed power adapter (PDU) with fuse plug and LED indicators", "Lockable drawers and ventilation", "Simple plug-and-play setup"],
    ],
    fit: "Perfect for: Schools, libraries, labs, and large organizations",
  },
  {
    image: "/assets/tough-pdu.png",
    title: "4. TOUGH Power Distribution Units (PDU)",
    body:
      "CE-approved PDUs designed for server racks and data centers, offering efficient power distribution, surge protection, and long-term durability.",
    groups: [],
    fit: "Ideal for: IT managers needing safe and scalable power solutions",
  },
];

const whyCards = [
  ["/assets/tough-why-1.png", "33+ years of local industry experience"],
  ["/assets/tough-why-3.png", "CE-certified quality for safety and reliability"],
  ["/assets/tough-why-5.png", "Fully customizable configurations"],
  ["/assets/tough-why-2.png", "Expert guidance, installation & after-sales support"],
  ["/assets/tough-why-4.png", "Designed for optimal airflow, cable management & security"],
  ["/assets/tough-why-6.png", "Proven Reliability in Data Centers & Offices"],
];

export default function ToughServerRacksPage() {
  return (
    <main className="tough-page">
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
          {toughNavItems.map(([item, href]) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="services-nav-link" key={item} />
            ) : (
              <a
                className={
                  item === "TOUGH Server Racks"
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

      <section className="tough-about-hero">
        <div className="tough-about-card">
          <img src="/assets/tough-logo.png" alt="TOUGH" />
          <h1>About TOUGH Series</h1>
          <p>
            The TOUGH Series by Datacom Enterprise is the trusted choice for
            organizations seeking durable, customizable, and efficient server rack
            solutions. With over 33 years of experience, we've engineered racks
            tailored for data centers, industrial spaces, and offices.
          </p>
        </div>
      </section>

      <section className="tough-product-section" id="tough-products">
        {toughProducts.map((product) => (
          <article className="tough-product-row" key={product.title}>
            <img src={product.image} alt="" />
            <div className="tough-product-card">
              <h2>{product.title}</h2>
              <p>{product.body}</p>
              {product.groups.map((group, index) => (
                <div key={`${product.title}-${index}`}>
                  {product.groups.length > 1 && (
                    <h3>{index === 0 ? "Features:" : "Included Accessories:"}</h3>
                  )}
                  <ul>
                    {group.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <strong>{product.fit}</strong>
            </div>
          </article>
        ))}
      </section>

      <section className="tough-why">
        <span className="services-pill">Why Choose TOUGH Racks</span>
        <h2>
          Why Businesses Trust TOUGH by
          <br />
          Datacom Enterprise
        </h2>
        <div className="tough-why-grid">
          {whyCards.map(([image, text]) => (
            <article key={text}>
              <img src={image} alt="" />
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tough-cta">
        <div>
          <h2>
            Empower Your Business with
            <br />
            Trusted IT Solutions
          </h2>
          <p>
            From installation to maintenance, our experts deliver reliable IT
            support tailored to your business needs.
          </p>
          <a href="/contact-10">Learn More</a>
        </div>
      </section>

      <SiteFooter />
      <SmartChat servicePage />
      <CookieSettings servicePage />
    </main>
  );
}
