import { CookieSettings } from "../../cookie-settings";
import { NavMoreMenu } from "../../nav-more-menu";
import { ProductSearch } from "../../product-search";
import { SiteFooter } from "../../site-footer";
import { SmartChat } from "../../smart-chat";

const servicesNavItems = [
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

const serviceCards = [
  {
    title: ["1. Infrastructure Setup", "& Installation"],
    image: "/assets/service-overview-1.png",
  },
  {
    title: ["2. Workplace & End-", "User Solutions"],
    image: "/assets/service-overview-2.png",
  },
  {
    title: ["3. IT Lifecycle", "Services"],
    image: "/assets/service-overview-3.png",
  },
];

const infrastructureDetails = [
  {
    number: "01",
    title: "Server & Storage Installation",
    image: "/assets/services-install-1.png",
    text:
      "We handle the full setup and configuration of servers, storage systems, Synology NAS, and APC power solutions - ensuring your infrastructure runs smoothly and efficiently from day one.",
    points: [
      "Install and configure enterprise servers and storage devices",
      "Optimize performance and connectivity for business operations",
      "Set up data backup, redundancy, and power protection systems",
    ],
  },
  {
    number: "02",
    title: "Rack Mounting & Cabling",
    image: "/assets/services-install-2.png",
    text:
      "We provide professional installation of racks, PDUs, UPS systems, and structured cabling that meet safety and industry standards.",
    points: [
      "Ensure clean and organized cabling for easy maintenance",
      "Properly label and manage network and power connections",
      "Implement cable routing to enhance airflow and equipment longevity",
    ],
  },
  {
    number: "03",
    title: "Customized Server Racks",
    image: "/assets/services-install-3.png",
    text:
      "We supply and install TOUGH racks ranging from 6U to 48U, fully customizable for special configurations and equipment layouts.",
    points: [
      "Tailor rack size and structure to your requirements",
      "Add cooling and cable management features",
      "Ensure durable and stable mounting for all IT equipment",
    ],
  },
  {
    number: "04",
    title: "Configuration Services",
    image: "/assets/services-install-4.png",
    text:
      "Our experts handle complete installation and configuration of servers, storage, and IT devices - ensuring your systems perform reliably from the start.",
    points: [
      "Configure operating systems and firmware updates",
      "Apply security and network settings",
      "Conduct performance and stability testing",
    ],
  },
];

const workplaceDetails = [
  {
    number: "01",
    title: "Laptop & Desktop Solutions",
    image: "/assets/services-workplace-1.png",
    text:
      "From setup to upgrades, we ensure your laptops and desktops run efficiently and stay secure with regular updates and maintenance.",
    points: [
      "Perform hardware and software setup or replacement",
      "Upgrade memory, storage, and system performance",
      "Run general servicing, updates, and system backups",
    ],
  },
  {
    number: "02",
    title: "High Performance & Simulations computing system",
    image: "/assets/services-workplace-2.png",
    text:
      "We provide optimized computing systems designed for data-intensive research, engineering simulations, artificial intelligence, and other performance-critical applications.",
    points: [
      "Design based on performance and usage needs",
      "Supports advanced simulation software including Ansys for engineering and scientific applications.",
    ],
  },
  {
    number: "03",
    title: "End-User IT Devices",
    image: "/assets/services-workplace-3.png",
    text:
      "We supply and support a wide range of IT devices - from Apple products to monitors, printers, and networking equipment.",
    points: [
      "Source and supply premium IT hardware from trusted brands",
      "Provide setup and integration with existing systems",
      "Offer maintenance and troubleshooting support",
    ],
  },
];

const lifecycleDetails = [
  {
    number: "01",
    title: "IT Asset Disposal & Relocation",
    image: "/assets/services-lifecycle-1.png",
    text:
      "We handle dismantling, relocation, and safe e-waste disposal with care and environmental responsibility.",
    points: [
      "Plan and execute safe IT relocation for offices or data centers",
      "Manage dismantling and setup at new locations",
      "Partner with certified recyclers for eco-friendly e-waste disposal",
    ],
  },
];

const whyChooseItems = [
  [
    "/assets/services-why-1.png",
    "Years of IT infrastructure experience across industries.",
  ],
  [
    "/assets/services-why-2.png",
    "Tailored services for SMEs, enterprises, and government projects.",
  ],
  [
    "/assets/services-why-3.png",
    "Reliable and cost-effective solutions built by us.",
  ],
  [
    "/assets/services-why-4.png",
    "Installation, cabling, relocation, and SLA support handled by certified engineers.",
  ],
  [
    "/assets/services-why-5.png",
    "Partnerships with HPE, Dell, Lenovo, Apple, Synology, APC, and more.",
  ],
];

export default function ServicesPage() {
  return (
    <main className="services-page">
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
          {servicesNavItems.map(([item, href]) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="services-nav-link" key={item} />
            ) : (
              <a
                className={item === "Services" ? "services-nav-link active" : "services-nav-link"}
                href={href}
                key={item}
              >
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      <section className="services-hero" aria-label="Services hero">
        <h1>Our Services</h1>
      </section>

      <section className="services-overview" id="services-overview">
        <span className="services-pill">Services Overview</span>
        <h2>All-in-One IT Services You Can Rely On</h2>
        <div className="services-card-grid">
          {serviceCards.map((card) => (
            <article className="services-card" key={card.title.join(" ")}>
              <img src={card.image} alt="" />
              <h3>
                {card.title[0]}
                <br />
                {card.title[1]}
              </h3>
              <a href="#service-details">Learn More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-section blue" id="service-details">
        <span className="services-pill">Our Services</span>
        <h2>1. Infrastructure Setup &amp; Installation</h2>
        <p className="service-detail-intro">
          Our team provides full installation, configuration, and setup services for enterprise
          IT environments - from homes and offices to data centers.
        </p>
        <div className="service-detail-list">
          {infrastructureDetails.map((item) => (
            <article className="service-detail-card" key={item.number}>
              <img src={item.image} alt="" />
              <div className="service-detail-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <strong>{item.number}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-section white">
        <span className="services-pill">Our Services</span>
        <h2>2. Workplace &amp; End-User Solutions</h2>
        <p className="service-detail-intro">
          We provide end-to-end IT support for personal and business devices to keep your
          daily operations smooth and efficient.
        </p>
        <div className="workplace-grid">
          {workplaceDetails.map((item) => (
            <article className="workplace-card" key={item.number}>
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <strong>{item.number}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="service-detail-section blue compact">
        <span className="services-pill">Our Services</span>
        <h2>3. IT Lifecycle Services</h2>
        <p className="service-detail-intro">
          We manage your IT equipment throughout its full lifecycle - from deployment and
          relocation to secure and eco-friendly disposal.
        </p>
        <div className="service-detail-list">
          {lifecycleDetails.map((item) => (
            <article className="service-detail-card" key={item.number}>
              <img src={item.image} alt="" />
              <div className="service-detail-copy">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <strong>{item.number}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="services-why">
        <span className="services-pill">Why Choose Us</span>
        <h2>Backed by experience. Driven by<br />innovation. Focused on your success.</h2>
        <div className="services-why-grid">
          {whyChooseItems.map(([image, text]) => (
            <article key={text}>
              <img src={image} alt="" />
              <p>{text}</p>
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
