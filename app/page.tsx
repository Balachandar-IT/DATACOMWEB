"use client";

import { useMemo, useState } from "react";

const navItems = [
  ["Home", "home"],
  ["Services", "services"],
  ["Shop", "shop"],
  ["Business IT Products", "business-it-products"],
  ["Promotion", "promotion"],
  ["Data Center Products", "data-center-products"],
  ["TOUGH Server Racks", "tough-server-racks"],
  ["AI Workstations", "ai-workstations"],
  ["Explore", "explore"],
  ["Careers", "careers"],
  ["Contact Us", "contact-us"],
];

const serviceOverview = [
  {
    title: "Infrastructure Setup & Installation",
    image: "Rack ready deployment",
    summary:
      "Server, storage, rack, PDU, UPS, structured cabling, and configuration work handled from site survey to handover.",
    bullets: [
      "Server and Synology NAS installation",
      "Rack mounting and cable labelling",
      "TOUGH racks from 6U to 48U",
      "Firmware, network, backup, and power setup",
    ],
  },
  {
    title: "Workplace & End-User Solutions",
    image: "Office device rollout",
    summary:
      "Business devices, industrial PCs, displays, peripherals, and support packages for daily operations.",
    bullets: [
      "Laptop and desktop deployment",
      "Memory, storage, and software upgrades",
      "Apple, Dell, HP, Lenovo and printer support",
      "High-performance systems for simulation and AI",
    ],
  },
  {
    title: "IT Lifecycle Services",
    image: "Move, retire, renew",
    summary:
      "Relocation, disposal, recovery planning, and maintenance that keeps equipment useful for longer.",
    bullets: [
      "Office and data center relocation",
      "Safe dismantling and reinstallation",
      "Eco-conscious e-waste coordination",
      "SLA maintenance and troubleshooting",
    ],
  },
];

const productFamilies = [
  {
    id: "business-it-products",
    title: "Business IT Products",
    intro: "Enterprise-ready devices for teams, offices, schools, and field work.",
    items: ["Laptops", "Desktops", "Monitors", "Printers", "Apple devices"],
  },
  {
    id: "data-center-products",
    title: "Data Center Products",
    intro: "Infrastructure hardware for storage, compute, power, and connectivity.",
    items: ["Servers", "Storage", "UPS", "Networking", "Racks"],
  },
  {
    id: "tough-server-racks",
    title: "TOUGH Server Racks",
    intro: "In-house rack systems and accessories for compact rooms and data halls.",
    items: ["Wall mount cabinets", "42U racks", "PDUs", "Rails", "Cable management"],
  },
  {
    id: "ai-workstations",
    title: "AI Workstations",
    intro: "GPU-ready workstations for design, engineering, AI, and simulation workloads.",
    items: ["GPU builds", "Simulation PCs", "Industrial PCs", "Storage upgrades"],
  },
];

const products = [
  {
    name: 'HP EliteBook 8 G1i 14" AI PC',
    category: "Laptop",
    price: 2709,
    status: "In Stock",
    badge: "AI Ready",
    specs: ["Core Ultra 7", "1TB SSD", "14-inch business display"],
  },
  {
    name: "TOUGH CX 42U Equipment Rack",
    category: "Tough Server Rack",
    price: 1599,
    status: "In Stock",
    badge: "Best Seller",
    specs: ["800mm x 1000mm", "Perforated door", "Rack accessories ready"],
  },
  {
    name: "TOUGH CX Vertical Cable Management",
    category: "Tough Rack Accessories",
    price: 92,
    status: "In Stock",
    badge: "Accessory",
    specs: ["Rack side mount", "Cleaner cable runs", "Fast installation"],
  },
  {
    name: "Tough 24 Way PDU 32A",
    category: "Tough PDU",
    price: 430,
    status: "In Stock",
    badge: "Power",
    specs: ["20 C13 outlets", "4 C19 outlets", "32A input"],
  },
  {
    name: "Synology DS423+ Storage Bundle",
    category: "Data Center Products",
    price: 1157,
    status: "Quote",
    badge: "NAS",
    specs: ["4-bay NAS", "Seagate IronWolf option", "Backup and file sharing"],
  },
  {
    name: "HPE ProLiant DL380 Gen10 Plus",
    category: "Data Center Products",
    price: 0,
    status: "Quote",
    badge: "Server",
    specs: ["8SFF chassis", "Enterprise workload", "Configured to order"],
  },
  {
    name: "Dell OptiPlex Business Desktop",
    category: "Desktop",
    price: 1290,
    status: "In Stock",
    badge: "Office",
    specs: ["Compact form factor", "Windows Pro", "Deployment support"],
  },
  {
    name: "QRUSH Keyboard and Mouse Kit",
    category: "Accessories",
    price: 39,
    status: "In Stock",
    badge: "Value",
    specs: ["Everyday peripherals", "Office bundle", "Bulk order ready"],
  },
];

const categories = ["All", ...Array.from(new Set(products.map((item) => item.category)))];

const featured = [
  ["Servers", "Enterprise-grade performance for critical workloads."],
  ["Synology NAS", "Reliable data storage, backup, and business continuity."],
  ["APC UPS Systems", "Power protection for business-critical equipment."],
  ["Laptop / Desktop", "Secure devices for productive teams."],
  ["QRUSH Products", "Affordable everyday peripherals for office users."],
  ["TOUGH Racks", "Durable racks built for airflow, scale, and serviceability."],
];

const whyItems = [
  "Experience across corporate, education, government, and industrial projects.",
  "Services tailored for SMEs, enterprise teams, facilities, and data rooms.",
  "In-house TOUGH, QRUSH, and Dcom solutions for cost-effective flexibility.",
  "Certified engineers for installation, cabling, relocation, and support.",
  "Partner ecosystem covering HPE, Dell, Lenovo, Apple, Synology, APC, and more.",
];

function formatPrice(price: number) {
  if (price === 0) {
    return "Request Quote";
  }

  return new Intl.NumberFormat("en-SG", {
    currency: "SGD",
    style: "currency",
  }).format(price);
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [quickView, setQuickView] = useState<(typeof products)[number] | null>(
    null,
  );
  const [formSent, setFormSent] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesPrice = product.price === 0 || product.price <= maxPrice;
      const matchesSearch =
        normalized.length === 0 ||
        product.name.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized) ||
        product.specs.join(" ").toLowerCase().includes(normalized);

      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [maxPrice, searchTerm, selectedCategory]);

  const cartCount = Object.values(cart).reduce((total, count) => total + count, 0);
  const cartTotal = products.reduce((total, product) => {
    return total + (cart[product.name] ?? 0) * product.price;
  }, 0);

  function addToCart(productName: string) {
    setCart((current) => ({
      ...current,
      [productName]: (current[productName] ?? 0) + 1,
    }));
  }

  return (
    <main className="site-shell">
      <header className="masthead">
        <a className="logo-link" href="#home" aria-label="Datacom Enterprise home">
          <img
            className="brand-logo"
            src="/assets/datacom-logo.png"
            alt="Datacom Enterprise Pte Ltd"
          />
        </a>
        <label className="site-search">
          <span>Search</span>
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Products, racks, services"
          />
        </label>
        <a className="cart-pill" href="#cart-panel" aria-label={`${cartCount} cart items`}>
          <span aria-hidden="true">Cart</span>
          <strong>{cartCount}</strong>
        </a>
      </header>

      <nav className="nav-bar" aria-label="Primary navigation">
        <div className="nav-inner">
          {navItems.map(([item, anchor]) => (
            <a className="nav-link" href={`#${anchor}`} key={item}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <span className="eyebrow">Datacom Enterprise Pte Ltd</span>
          <h1>Reliable IT services and enterprise hardware for growing teams</h1>
          <p>
            Servers, storage, racks, workplace devices, AI workstations, and
            professional setup support from a Singapore-based IT partner.
          </p>
          <div className="hero-actions">
            <a className="btn solid" href="#shop">Shop Products</a>
            <a className="btn ghost" href="#services">View Services</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Datacom enterprise technology illustration">
          <img
            src="/assets/datacom-hero-illustration.png"
            alt="Enterprise IT infrastructure illustration"
          />
          <div className="hero-metrics">
            <strong>50K+</strong>
            <span>businesses supported</span>
            <strong>168+</strong>
            <span>reliable products</span>
          </div>
        </div>
      </section>

      <section className="promo-band" id="promotion">
        <div>
          <span className="eyebrow">Latest Deals</span>
          <h2>New launches, product bundles, and exclusive infrastructure savings</h2>
        </div>
        <a className="btn light" href="#shop">Upgrade Your Setup</a>
      </section>

      <section className="section about-section" id="explore">
        <div className="section-heading">
          <span className="eyebrow">About Us</span>
          <h2>End-to-end IT solutions for smarter, steadier business operations</h2>
        </div>
        <div className="about-grid">
          <p>
            Datacom helps organizations source, deploy, configure, relocate, and
            maintain the technology that keeps offices, classrooms, and data
            rooms running.
          </p>
          <p>
            The clone below mirrors the reference site's practical structure:
            services first, product families next, a shop experience, then clear
            inquiry and contact paths.
          </p>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading wide-heading">
          <span className="eyebrow">Our Services</span>
          <h2>All-in-one IT services you can rely on</h2>
          <p>
            Professional implementation and support for infrastructure,
            workplace devices, and full IT lifecycle needs.
          </p>
        </div>
        <div className="service-overview">
          {serviceOverview.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-visual">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{service.image}</strong>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section families-section">
        <div className="section-heading wide-heading">
          <span className="eyebrow">Our Products</span>
          <h2>Products we deliver</h2>
          <p>
            Trusted IT hardware from global brands plus in-house rack,
            peripheral, and industrial computing solutions.
          </p>
        </div>
        <div className="family-grid">
          {productFamilies.map((family) => (
            <article className="family-card" id={family.id} key={family.title}>
              <h3>{family.title}</h3>
              <p>{family.intro}</p>
              <div>
                {family.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <a href="#contact-us">Talk to an Expert</a>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="section-heading wide-heading">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Backed by experience, driven by innovation, focused on your success</h2>
        </div>
        <div className="why-grid">
          {whyItems.map((item, index) => (
            <article className="why-card" key={item}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shop-section" id="shop">
        <aside className="filters" aria-label="Shop filters">
          <h2>Filter by</h2>
          <label>
            Search
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="HP, rack, PDU"
            />
          </label>
          <div>
            <h3>Category</h3>
            <div className="filter-options">
              {categories.map((category) => (
                <label key={category}>
                  <input
                    checked={selectedCategory === category}
                    name="category"
                    onChange={() => setSelectedCategory(category)}
                    type="radio"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
          <label>
            Price up to {formatPrice(maxPrice)}
            <input
              max="11000"
              min="100"
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              step="100"
              type="range"
              value={maxPrice}
            />
          </label>
          <div className="filter-meta">
            <span>SGD 0</span>
            <span>SGD 10,719</span>
          </div>
        </aside>

        <div className="shop-content">
          <div className="shop-heading">
            <div>
              <span className="eyebrow">Shop</span>
              <h2>IT products online</h2>
            </div>
            <p>{filteredProducts.length} products shown</p>
          </div>

          <div className="product-list">
            {filteredProducts.map((product) => (
              <article className="shop-card" key={product.name}>
                <div className="product-art">
                  <span>{product.badge}</span>
                  <strong>{product.category}</strong>
                </div>
                <div className="shop-card-body">
                  <button type="button" onClick={() => setQuickView(product)}>
                    Quick View
                  </button>
                  <h3>{product.name}</h3>
                  <p>{formatPrice(product.price)}</p>
                  <small>Excluding Sales Tax</small>
                  <div className="spec-row">
                    {product.specs.slice(0, 2).map((spec) => (
                      <span key={spec}>{spec}</span>
                    ))}
                  </div>
                  <button
                    className="btn solid"
                    disabled={product.status === "Out of Stock"}
                    onClick={() => addToCart(product.name)}
                    type="button"
                  >
                    {product.status === "Quote" ? "Add Quote Item" : "Add to Cart"}
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="cart-panel" id="cart-panel">
            <div>
              <span className="eyebrow">Cart</span>
              <h2>Inquiry basket</h2>
            </div>
            {cartCount === 0 ? (
              <p>Add products to prepare a quote request.</p>
            ) : (
              <div className="cart-lines">
                {Object.entries(cart).map(([name, quantity]) => (
                  <span key={name}>
                    {quantity} x {name}
                  </span>
                ))}
              </div>
            )}
            <strong>Total: {formatPrice(cartTotal)}</strong>
            <a className="btn ghost" href="#contact-us">Send Inquiry</a>
          </div>
        </div>
      </section>

      <section className="section featured-section">
        <div className="section-heading wide-heading">
          <span className="eyebrow">Featured Products</span>
          <h2>From servers to racks, explore top selections</h2>
        </div>
        <div className="featured-grid">
          {featured.map(([title, text], index) => (
            <article className="featured-card" key={title}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#shop">View Details</a>
            </article>
          ))}
        </div>
      </section>

      <section className="upgrade-cta">
        <h2>Ready to upgrade your IT?</h2>
        <p>
          Speak with Datacom specialists and discover the best solution for your
          business environment.
        </p>
        <a className="btn light" href="#contact-us">Get Started Now</a>
      </section>

      <section className="contact-section" id="contact-us">
        <div className="contact-copy">
          <span className="contact-eyebrow">Connect with us today</span>
          <h2>We're here to help</h2>
          <p>Fill out the form and the team will reach out within 1-2 business days.</p>
          <div className="contact-list">
            <p><strong>Location:</strong>No. 20 Lorong 21A Geylang, Datacom Enterprise Building, Singapore 388430</p>
            <p><strong>Contact number:</strong>+65 6844 4272</p>
            <p><strong>WhatsApp:</strong>+65 8939 3191</p>
            <p><strong>Email Address:</strong>info@dcom.com.sg</p>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            setFormSent(true);
          }}
        >
          <h3>Get in touch</h3>
          <label>
            Name *
            <input required />
          </label>
          <label>
            Company name
            <input />
          </label>
          <label>
            Email *
            <input required type="email" />
          </label>
          <label>
            Phone
            <input />
          </label>
          <label className="wide">
            Interested In
            <select defaultValue="">
              <option value="" disabled>Select an option</option>
              <option>Business IT Products</option>
              <option>Data Center Products</option>
              <option>AI Workstations</option>
              <option>Services</option>
            </select>
          </label>
          <label className="wide">
            Service Category
            <select defaultValue="">
              <option value="" disabled>Select service category</option>
              <option>Infrastructure Setup</option>
              <option>Workplace Solutions</option>
              <option>IT Lifecycle Services</option>
            </select>
          </label>
          <label className="wide">
            Write a message
            <textarea />
          </label>
          <button className="btn solid" type="submit">Submit</button>
          {formSent ? <p className="form-note">Thanks. Your inquiry is ready for Datacom follow-up.</p> : null}
        </form>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src="/assets/datacom-logo-white.png"
              alt="Datacom Enterprise Pte Ltd"
            />
            <p>
              Trusted IT products and services for servers, storage,
              networking, workplace devices, and support.
            </p>
          </div>
          <nav className="footer-links" aria-label="Footer sitemap">
            <h3>Sitemap</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#shop">Shop</a>
            <a href="#explore">Explore</a>
            <a href="#contact-us">Contact Us</a>
          </nav>
          <div className="footer-links">
            <h3>Policy</h3>
            <a href="#">Return and Refund</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <img
              className="social-icons"
              src="/assets/social-icons-white.png"
              alt="LinkedIn, WhatsApp, Facebook, and Instagram"
            />
          </div>
          <address>
            <h3>Contact Us</h3>
            <p>No. 20 Lorong 21A Geylang, Singapore 388430</p>
            <p>+65 6844 4272</p>
            <p>info@dcom.com.sg</p>
          </address>
          <div className="payment-row">
            <span>We accept the following payment methods</span>
            <div>
              {["visa", "mastercard", "amex", "unionpay", "jcb", "diners", "discover", "paypal"].map((name) => (
                <img
                  alt={name}
                  key={name}
                  src={`/assets/payments/${name}.png`}
                />
              ))}
            </div>
          </div>
          <small>&copy; 2026 by Datacom. Ecommerce Website</small>
        </div>
      </footer>

      <a className="contact-float" href="#contact-us">Get in touch</a>
      <a className="chat-button" href="#contact-us" aria-label="Open chat">Chat</a>
      <div className="cookie-bar" role="status">
        <span>Cookie settings</span>
        <button type="button" aria-label="Close cookie settings">x</button>
      </div>

      {quickView ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <article className="quick-modal">
            <button
              className="modal-close"
              onClick={() => setQuickView(null)}
              type="button"
            >
              Close
            </button>
            <div className="product-art large">
              <span>{quickView.badge}</span>
              <strong>{quickView.category}</strong>
            </div>
            <div>
              <h2>{quickView.name}</h2>
              <p>{formatPrice(quickView.price)}</p>
              <ul>
                {quickView.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
              <button
                className="btn solid"
                onClick={() => {
                  addToCart(quickView.name);
                  setQuickView(null);
                }}
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </article>
        </div>
      ) : null}
    </main>
  );
}
