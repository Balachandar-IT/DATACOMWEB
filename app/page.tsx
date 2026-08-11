import type { CSSProperties } from "react";
import { AiPromoPopup } from "./ai-promo-popup";
import { ContactIcon } from "./contact-icon";
import { ContactLeadForm } from "./contact-lead-form";
import { CookieSettings } from "./cookie-settings";
import { NavMoreMenu } from "./nav-more-menu";
import { ProductSearch } from "./product-search";
import { SiteFooter } from "./site-footer";
import { SmartChat } from "./smart-chat";

const navItems = [
  "Home",
  "Services",
  "Shop",
  "Business IT Products",
  "Promotion",
  "Data Center Products",
  "TOUGH Server Racks",
  "AI Workstations",
  "Explore",
  "Careers",
  "More",
];

const mobileNavItems = [
  "Services",
  "Shop",
  "Business IT Products",
  "Promotion",
  "Data Center Products",
  "TOUGH Server Racks",
  "AI Workstations",
  "Explore",
  "Careers",
  "Contact Us",
  "Product category",
];

const navHref = (item: string) =>
  item === "Services"
    ? "/home/services"
    : item === "Shop"
      ? "/shop"
    : item === "Promotion"
      ? "/promotion-1"
    : item === "Business IT Products"
      ? "/business-it-products-2"
    : item === "Data Center Products"
      ? "/business-it-products-2-1"
    : item === "TOUGH Server Racks"
      ? "/s-projects-side-by-side"
    : item === "AI Workstations"
      ? "/ai-workstations"
    : item === "Explore"
      ? "/explore"
    : item === "Careers"
      ? "/careers"
    : item === "Contact Us"
      ? "/contact-10"
    : item === "Product category"
      ? "/shop"
      : `#${item.toLowerCase().replaceAll(" ", "-")}`;

const siteImages = {
  about:
    "/assets/vendor/ab07e4-b09f97a0511445cfa5bfdce6091f83a7-mv2-e8f0ac53a24a.avif",
  deal:
    "/assets/vendor/untitled-design-12-f5b9a3623391.avif",
  launch:
    "/assets/vendor/ai-workstation-sg-a7f3eaefd35a.avif",
  business:
    "/assets/vendor/untitled-design-2023-04-24t152436-edited-1b7f03d5342a.avif",
  dataCenter:
    "/assets/vendor/002-94d2de49cdb6.avif",
  nas:
    "/assets/vendor/heading-4-4386bd928f59.avif",
  ups:
    "/assets/vendor/apc-ups-14-8853190381e1.avif",
  laptop:
    "/assets/vendor/untitled-design-38-53bd3844daf4.avif",
  qrush:
    "/assets/vendor/untitled-design-57-573292d3696b.avif",
  rack:
    "/assets/vendor/perforated-6u-a3bf2867908c.avif",
  cta:
    "/assets/vendor/section-platform-highlight-0f14656405a3.avif",
};

const dealCards = [
  {
    title: "Don't Miss These Exclusive Deals",
    image: siteImages.deal,
  },
  {
    title: "Be the First to Experience Our New Launches",
    image: siteImages.launch,
  },
];

const serviceGroups = [
  {
    title: "1. Infrastructure Setup & Installation",
    points: [
      [
        "Server & Storage Installation",
        "Setup and configure enterprise servers, storage, Synology NAS, and APC power solutions for homes, offices, and data centers.",
      ],
      [
        "Rack Mounting & Cabling",
        "Installation of racks, PDUs, UPS systems, and structured cabling with professional safety and care.",
      ],
      [
        "Customized Server Racks",
        "TOUGH racks from 6U to 48U, with options for special sizes and configurations.",
      ],
      [
        "Configuration Services",
        "Full installation and configuration for servers, storage, and IT devices with expert guidance.",
      ],
    ],
  },
  {
    title: "2. Workplace & End-User Solutions",
    points: [
      [
        "Laptop & Desktop Solutions",
        "Setup, upgrades, software updates, backup, and performance checks for both business and personal devices.",
      ],
      [
        "OEM Industrial Systems",
        "Custom-built industrial PCs tailored to your specific requirements.",
      ],
      [
        "End-User IT Devices",
        "Supply and support for Apple devices, monitors, printers, UPS, Synology storage, and networking switches tailored for business users.",
      ],
    ],
  },
  {
    title: "3. IT Lifecycle Services",
    points: [
      [
        "IT Asset Disposal & Relocation",
        "Safe dismantling, relocation, and eco-friendly e-waste recycling.",
      ],
    ],
  },
];

const productCards = [
  {
    title: "Business IT Products",
    sub: "Equip your team with enterprise-ready devices.",
    text: "Laptops, desktops, monitors, and printers from Apple, Dell, HP, Lenovo and more.",
    image: siteImages.business,
    cta: "Browse Business Products",
  },
  {
    title: "Data Center Products",
    sub: "Powerful infrastructure to support your business growth.",
    text: "Servers, racks, storage, UPS, and networking from top brands like Synology, HPE, Cisco, and APC.",
    image: siteImages.dataCenter,
    cta: "Explore Data Center Solutions",
  },
];

const houseBrands = [
  [
    "TOUGH Racks & Accessories",
    "Durable server racks (6U-48U), shelves, cable management, and cooling solutions.",
  ],
  [
    "TOUGH Mobility & Ergonomic Solutions",
    "LCD arms, LCD stands, iPad stands, mobile carts, and mobile charging carts for offices, education, and healthcare.",
  ],
  [
    "TOUGH Cabling & Connectivity",
    "Power cables, connectivity cables, and network cables to complete your IT setup.",
  ],
  [
    "QRUSH Computer Accessories",
    "Quality everyday peripherals including keyboards, mice, headsets, and other PC accessories.",
  ],
  [
    "Dcom Industrial PCs",
    "Custom-built computing systems for specialized applications.",
  ],
];

const whyItems = [
  [
    "/assets/vendor/group-9-3-c02583d79f3d.avif",
    "Years of IT infrastructure experience across industries.",
  ],
  [
    "/assets/vendor/group-8-4-7c39b47b6694.avif",
    "Tailored services for SMEs, enterprises, and government projects.",
  ],
  [
    "/assets/vendor/group-6-3410c33d0482.avif",
    "Reliable and cost-effective solutions built by us.",
  ],
  [
    "/assets/vendor/group-5-2-d959f8fbb4cc.avif",
    "Installation, cabling, relocation, and SLA support handled by certified engineers.",
  ],
  [
    "/assets/vendor/group-7-1-af6a8f5de370.avif",
    "Partnerships with HPE, Dell, Lenovo, Apple, Synology, APC, and more.",
  ],
];

const featuredProducts = [
  ["1. Servers", "Enterprise-grade performance for critical workloads.", siteImages.dataCenter],
  ["2. Synology NAS", "Reliable data storage, backup, and business continuity.", siteImages.nas],
  ["3. APC UPS Systems", "Protect your IT equipment with trusted power solutions.", siteImages.ups],
  ["4. Laptop / Desktop", "Powerful and secure laptops for business professionals.", siteImages.laptop],
  ["5. QRUSH Product", "Affordable, reliable PC peripherals for everyday use.", siteImages.qrush],
  [
    "6. TOUGH Server Racks & Accessories",
    "Durable racks designed for efficiency and scalability.",
    siteImages.rack,
  ],
];

const insights = [
  [
    "DATACOM SERVICE",
    "The Importance of Effective Cable Management in Modern Network Performance",
    "/assets/vendor/ab07e4-f480168a27de4e3b9823b57002e67fc7-mv2-efe34ead4ab5.avif",
  ],
  [
    "DATA CENTER",
    "UPS Power Supply Selection for IT Infrastructure",
    "/assets/vendor/31f7f6-58df12c653d646c898dd3b23cd1ba8c0-mv2-057d1aa3066a.avif",
  ],
  [
    "RACK GUIDE",
    "How to Choose a Server Rack Supplier in Singapore",
    "/assets/vendor/31f7f6-5800df6609d143c2ae10c3a50db66522-mv2-b6c24e6e91d6.avif",
  ],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="top-header" aria-label="Datacom Enterprise header">
        <a className="logo-link" href="#" aria-label="Datacom Enterprise home">
          <img
            className="brand-logo"
            src="/assets/datacom-logo.png"
            alt="Datacom Enterprise Pte Ltd"
          />
        </a>
        <ProductSearch />
      </header>

      <nav className="nav-bar" aria-label="Primary navigation">
        <div className="nav-inner">
          {navItems.map((item) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="nav-link" key={item} />
            ) : (
              <a
                className={item === "Home" ? "nav-link active" : "nav-link"}
                href={navHref(item)}
                key={item}
              >
                {item}
              </a>
            ),
          )}
        </div>
        <details className="mobile-nav-menu">
          <summary aria-label="Open navigation menu">
            <span className="hamburger-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="sr-only">Menu</span>
          </summary>
          <div className="mobile-nav-panel">
            {mobileNavItems.map((item) => (
              <a
                className="nav-link"
                href={navHref(item)}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </details>
      </nav>

      <AiPromoPopup />

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <h1>
            Empowering Businesses through Reliable IT with Datacom Enterprise
            Pte Ltd
          </h1>
          <p>
            We focus on delivering valuable and reliable IT services to our
            customers.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="btn ghost" href="#products">
              Upgrade Your Setup
            </a>
            <a className="btn solid" href="#contact-us">
              Talk to an IT Expert
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img
            src="/assets/datacom-hero-illustration.png"
            alt=""
            className="hero-image"
          />
        </div>
      </section>

      <section className="section deals-section" id="promotion">
        <div className="section-heading center-heading">
          <span className="pill-label">Latest Deals</span>
          <h2>Your spotlight on the latest<br />innovations and exclusive savings</h2>
        </div>
        <div className="deal-grid">
          {dealCards.map((deal) => (
            <article className="deal-card" key={deal.title}>
              <h3>{deal.title}</h3>
              <img src={deal.image} alt="" />
              <a className="btn mini" href="#contact-us">
                Upgrade Your Setup
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="explore">
        <img src={siteImages.about} alt="Datacom engineer working in a server rack" />
        <div>
          <span className="pill-label">About Us</span>
          <h2>About Us</h2>
          <p>
            At Datacom Enterprise Pte Ltd, we are committed to delivering
            end-to-end IT solutions that help businesses grow smarter and
            operate more efficiently. From enterprise servers, storage, and
            network infrastructure to professional installation and ongoing
            support, our team blends deep technical expertise with a
            customer-first mindset.
          </p>
          <p>
            With years of experience serving corporate, education, and
            government sectors, we continue to provide reliable products,
            innovative solutions, and trusted services tailored to every
            business need.
          </p>
          <div className="stats-row">
            <strong>50<b className="stat-blue">K+</b><span>Businesses Support</span></strong>
            <strong>168<b className="stat-blue">+</b><span>Reliable Products</span></strong>
            <strong>6<b className="stat-blue">K+</b><span>Dedicated Specialists</span></strong>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading center-heading">
          <span className="pill-label">Our Services</span>
          <h2>End-to-end IT services designed to<br />support your business growth</h2>
          <p>
            Professional IT solutions and support designed to keep your business
            running smoothly.
          </p>
        </div>
        <div className="service-list">
          {serviceGroups.map((group) => (
            <article className="service-row" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.points.map(([label, text]) => (
                  <li key={label}>
                    <strong>{label}</strong> - {text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section products-section" id="products">
        <span className="anchor-target" id="ai-workstations" aria-hidden="true" />
        <div className="section-heading center-heading">
          <span className="pill-label">Our Products</span>
          <h2>Products We Deliver</h2>
          <p>
            Supplying trusted IT hardware from world-class brands and our own
            in-house solutions.
          </p>
        </div>
        <div className="product-grid">
          {productCards.map((product) => (
            <article className="product-card" key={product.title}>
              <h3>{product.title}</h3>
              <h4>{product.sub}</h4>
              <p>{product.text}</p>
              <img src={product.image} alt="" />
              <a className="btn mini" href="#contact-us">
                {product.cta}
              </a>
            </article>
          ))}
        </div>
        <div className="brand-panel" id="tough-server-racks">
          <h3>Our In-House Brands</h3>
          <p>
            TOUGH, QRUSH, and Dcom deliver reliable racks, ergonomic solutions,
            and industrial PCs tailored to your business needs.
          </p>
          <div className="brand-grid">
            {houseBrands.map(([brand, text]) => (
              <article key={brand}>
                <strong>{brand}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-heading center-heading">
          <span className="pill-label">Why Choose Us</span>
          <h2>Backed by experience. Driven by<br />innovation. Focused on your success.</h2>
        </div>
        <div className="why-grid">
          {whyItems.map(([icon, item]) => (
            <article className="why-card" key={item}>
              <img src={icon} alt="" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section featured-section" id="shop">
        <div className="section-heading center-heading">
          <span className="pill-label">Featured Products</span>
          <h2>From servers to racks - explore our<br />top selections.</h2>
        </div>
        <div className="featured-grid">
          {featuredProducts.map(([product, text, image]) => (
            <article className="featured-card" key={product}>
              <img src={image} alt="" />
              <div>
                <h3>{product}</h3>
                <p>{text}</p>
                <a href="#contact-us">View Details</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="upgrade-cta" id="upgrade-now">
        <h2>Ready to Upgrade Your IT?</h2>
        <p>
          Talk to our experts today and discover the best solutions for your
          business.
        </p>
        <a className="btn solid cta-modal-button" href="#enquire-now">
          Get Started Now
        </a>
      </section>

      <section className="section insights-section">
        <div className="section-heading center-heading">
          <span className="pill-label">Insights & Updates</span>
          <h2>Stay informed with the latest IT<br />trends, tips, and company updates.</h2>
        </div>
        <div className="insight-grid">
          {insights.map(([tag, title, image], index) => (
            <article
              className="insight-card"
              key={title}
              style={{ "--insight-image": `url("${image}")` } as CSSProperties}
            >
              {index === 0 ? <span>{tag}</span> : null}
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact-us">
        <div className="contact-copy">
          <span className="contact-eyebrow">Connect with us today</span>
          <h2>We're Here to Help</h2>
          <p>Fill out the form and our team will reach out within 1-2 business days.</p>
          <div className="contact-list">
            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">
                <ContactIcon type="location" />
              </span>
              <p><strong>Location:</strong>No. 20 Lorong 21A Geylang<br />Datacom Enterprise Building.<br />Singapore 388430</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">
                <ContactIcon type="phone" />
              </span>
              <p><strong>Contact number:</strong>+65 6844 4272</p>
            </div>
            <div className="contact-detail whatsapp">
              <span className="contact-icon" aria-hidden="true">
                <ContactIcon type="whatsapp" />
              </span>
              <p><strong>WhatsApps:</strong>+65 8939 3191</p>
            </div>
            <div className="contact-detail">
              <span className="contact-icon" aria-hidden="true">
                <ContactIcon type="mail" />
              </span>
              <p><strong>Email Address:</strong>info@dcom.com.sg</p>
            </div>
          </div>
        </div>
        <ContactLeadForm className="contact-form" submitClassName="btn solid" title="Get in touch" titleLevel="h3" />
      </section>

      <SiteFooter />

      <SmartChat />
      <CookieSettings />
      <section
        className="enquiry-modal"
        id="enquire-now"
        aria-label="Enquire Now form"
      >
        <a className="enquiry-backdrop" href="#upgrade-now" aria-label="Close enquiry form" />
        <div className="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
          <a className="enquiry-close" href="#upgrade-now" aria-label="Close enquiry form">x</a>
          <h2 id="enquiry-title">Enquire Now</h2>
          <form className="enquiry-form">
            <label>
              First Name *
              <input aria-label="First Name" />
            </label>
            <label>
              Last Name *
              <input aria-label="Last Name" />
            </label>
            <label>
              Email *
              <input aria-label="Enquiry Email" />
            </label>
            <label>
              Phone
              <input aria-label="Enquiry Phone" />
            </label>
            <label className="wide">
              Product Name *
              <input aria-label="Product Name" />
            </label>
            <label className="wide">
              Write a message
              <textarea aria-label="Enquiry Message" />
            </label>
            <div className="recaptcha-box" aria-hidden="true">
              <span />
              <b>I'm not a robot</b>
              <small>reCAPTCHA</small>
            </div>
            <button className="enquiry-submit" type="button">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}
