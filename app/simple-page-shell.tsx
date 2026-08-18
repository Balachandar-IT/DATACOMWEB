import { CookieSettings } from "./cookie-settings";
import { NavMoreMenu } from "./nav-more-menu";
import { ProductSearch } from "./product-search";
import { SiteFooter } from "./site-footer";
import { SmartChat } from "./smart-chat";

const navItems = [
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
  ["More", ""],
];

type SimplePageShellProps = {
  active: string;
  children: React.ReactNode;
  servicePage?: boolean;
};

export function SimplePageShell({ active, children, servicePage = false }: SimplePageShellProps) {
  return (
    <main className="simple-route-page">
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
          {navItems.map(([item, href]) =>
            item === "More" ? (
              <NavMoreMenu linkClassName="services-nav-link" key={item} />
            ) : (
              <a
                className={item === active ? "services-nav-link active" : "services-nav-link"}
                href={href}
                key={item}
              >
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      {children}
      <SiteFooter />
      <SmartChat servicePage={servicePage} />
      <CookieSettings servicePage={servicePage} />
    </main>
  );
}
