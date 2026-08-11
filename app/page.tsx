import type { CSSProperties } from "react";
import { AiPromoPopup } from "./ai-promo-popup";
import { ContactIcon } from "./contact-icon";
import { ContactPhonePicker } from "./contact-phone-picker";
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

const wix = {
  about:
    "https://static.wixstatic.com/media/ab07e4_b09f97a0511445cfa5bfdce6091f83a7~mv2.png/v1/fill/w_367,h_497,al_c,lg_1,q_85,enc_avif,quality_auto/ab07e4_b09f97a0511445cfa5bfdce6091f83a7~mv2.png",
  deal:
    "https://static.wixstatic.com/media/ab07e4_45d24a67ee264887bd20431250a5c360~mv2.png/v1/fill/w_326,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20%2812%29.png",
  launch:
    "https://static.wixstatic.com/media/1470f5_44b376d59cb84dbfb417495e0b71f67f~mv2.png/v1/fill/w_326,h_217,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AI%20Workstation%20SG.png",
  business:
    "https://static.wixstatic.com/media/ab07e4_9a7fd24729e24e778cc046c832802931~mv2.png/v1/fill/w_366,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-04-24T152436_edited.png",
  dataCenter:
    "https://static.wixstatic.com/media/ab07e4_2a1f40476a384ae2a2b163ab88dbef25~mv2.png/v1/fill/w_366,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/002.png",
  nas:
    "https://static.wixstatic.com/media/ab07e4_42ca0d0cf58e4516a3c575d85b42944d~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/heading%20%284%29.png",
  ups:
    "https://static.wixstatic.com/media/ab07e4_af42fe0cc12d466aae9bf3efebecf2da~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/APC-UPS%20%2814%29.png",
  laptop:
    "https://static.wixstatic.com/media/ab07e4_170a859bcaec4d13ad21ce783c1de2b5~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20%2838%29.png",
  qrush:
    "https://static.wixstatic.com/media/ab07e4_15155fc5d7674bbeae01ac47dca44e9a~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20%2857%29.png",
  rack:
    "https://static.wixstatic.com/media/d3f362_5528bc90663443979ef7d68faf01e694~mv2.png/v1/fill/w_166,h_166,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Perforated%206U.png",
  cta:
    "https://static.wixstatic.com/media/1470f5_bb1964b59bb14213a16356e5dd15d5ca~mv2.png/v1/crop/x_0,y_40,w_1019,h_244/fill/w_1172,h_287,al_c,lg_1,q_85,enc_avif,quality_auto/Section%20-%20Platform%20Highlight.png",
};

const dealCards = [
  {
    title: "Don't Miss These Exclusive Deals",
    image: wix.deal,
  },
  {
    title: "Be the First to Experience Our New Launches",
    image: wix.launch,
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
    image: wix.business,
    cta: "Browse Business Products",
  },
  {
    title: "Data Center Products",
    sub: "Powerful infrastructure to support your business growth.",
    text: "Servers, racks, storage, UPS, and networking from top brands like Synology, HPE, Cisco, and APC.",
    image: wix.dataCenter,
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
    "https://static.wixstatic.com/media/1470f5_cee3035399564d6f943dbfe50a0f11ae~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%209%20%283%29.png",
    "Years of IT infrastructure experience across industries.",
  ],
  [
    "https://static.wixstatic.com/media/1470f5_545779eeda0548c79e046ebbbd42197a~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%208%20%284%29.png",
    "Tailored services for SMEs, enterprises, and government projects.",
  ],
  [
    "https://static.wixstatic.com/media/1470f5_190dc023bb35401190849958157d5d09~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%206.png",
    "Reliable and cost-effective solutions built by us.",
  ],
  [
    "https://static.wixstatic.com/media/1470f5_08fa97e9c89a42a89d144f4a5ce617d3~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%205%20%282%29.png",
    "Installation, cabling, relocation, and SLA support handled by certified engineers.",
  ],
  [
    "https://static.wixstatic.com/media/1470f5_9720af1cb9c34598bebf01d4e1495c8e~mv2.png/v1/fill/w_64,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%207%20%281%29.png",
    "Partnerships with HPE, Dell, Lenovo, Apple, Synology, APC, and more.",
  ],
];

const featuredProducts = [
  ["1. Servers", "Enterprise-grade performance for critical workloads.", wix.dataCenter],
  ["2. Synology NAS", "Reliable data storage, backup, and business continuity.", wix.nas],
  ["3. APC UPS Systems", "Protect your IT equipment with trusted power solutions.", wix.ups],
  ["4. Laptop / Desktop", "Powerful and secure laptops for business professionals.", wix.laptop],
  ["5. QRUSH Product", "Affordable, reliable PC peripherals for everyday use.", wix.qrush],
  [
    "6. TOUGH Server Racks & Accessories",
    "Durable racks designed for efficiency and scalability.",
    wix.rack,
  ],
];

const insights = [
  [
    "DATACOM SERVICE",
    "The Importance of Effective Cable Management in Modern Network Performance",
    "https://static.wixstatic.com/media/ab07e4_f480168a27de4e3b9823b57002e67fc7~mv2.png/v1/fill/w_379,h_379,al_c,q_85,enc_avif,quality_auto/ab07e4_f480168a27de4e3b9823b57002e67fc7~mv2.png",
  ],
  [
    "DATA CENTER",
    "UPS Power Supply Selection for IT Infrastructure",
    "https://static.wixstatic.com/media/31f7f6_58df12c653d646c898dd3b23cd1ba8c0~mv2.png/v1/fill/w_379,h_379,al_c,q_85,enc_avif,quality_auto/31f7f6_58df12c653d646c898dd3b23cd1ba8c0~mv2.png",
  ],
  [
    "RACK GUIDE",
    "How to Choose a Server Rack Supplier in Singapore",
    "https://static.wixstatic.com/media/31f7f6_5800df6609d143c2ae10c3a50db66522~mv2.png/v1/fill/w_379,h_379,al_c,q_85,enc_avif,quality_auto/31f7f6_5800df6609d143c2ae10c3a50db66522~mv2.png",
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
        <img src={wix.about} alt="Datacom engineer working in a server rack" />
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
        <form className="contact-form">
          <h3>Get in touch</h3>
          <label>
            Name *
            <input aria-label="Name" />
          </label>
          <label>
            Company name
            <input aria-label="Company name" />
          </label>
          <label>
            Email *
            <input aria-label="Email" />
          </label>
          <label>
            Phone
            <ContactPhonePicker />
          </label>
          <label className="wide">
            Interested In
            <select aria-label="Interested In" defaultValue="">
              <option value="" disabled></option>
              <option>Business IT Products</option>
              <option>Data Center Products</option>
              <option>AI Workstations</option>
              <option>Services</option>
            </select>
          </label>
          <label className="wide">
            Add-ons
            <select aria-label="Add-ons" defaultValue="">
              <option value="" disabled></option>
              <option>Installation</option>
              <option>Configuration</option>
              <option>Relocation</option>
            </select>
          </label>
          <label className="wide">
            Service Category
            <select aria-label="Service Category" defaultValue="Installation">
              <option>Installation</option>
              <option>Infrastructure Setup</option>
              <option>Workplace Solutions</option>
              <option>IT Lifecycle Services</option>
            </select>
          </label>
          <label className="wide">
            Write a message
            <textarea aria-label="Message" />
          </label>
          <button className="btn solid" type="button">Submit</button>
        </form>
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
