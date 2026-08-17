export type LegacyPage = {
  slug: string;
  title: string;
  description: string;
  active: string;
  primaryHref: string;
  cards: Array<{ title: string; text: string; href?: string }>;
};

export type LegacyCategory = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
};

export type LegacyPost = {
  slug: string;
  title: string;
  description: string;
  topic: string;
  relatedHref: string;
};

export const legacyPages: LegacyPage[] = [
  {
    slug: "home",
    title: "Datacom Enterprise Pte Ltd",
    description: "Singapore IT products, data center hardware, business devices, server racks, UPS, and IT support services.",
    active: "Home",
    primaryHref: "/shop",
    cards: [
      { title: "Business IT products", text: "Dell, HP, Lenovo, Apple, workstations, accessories, and office devices.", href: "/business-it-products-2" },
      { title: "Data center products", text: "Servers, storage, UPS, PDU, networking, server racks, and cabinet accessories.", href: "/business-it-products-2-1" },
      { title: "IT support services", text: "Installation, maintenance, deployment, and business IT support in Singapore.", href: "/it-support-maintenance-services" },
    ],
  },
  {
    slug: "about",
    title: "About Datacom Enterprise",
    description: "Datacom Enterprise Pte Ltd supports Singapore businesses with IT products, services, infrastructure, and reliable hardware supply.",
    active: "Home",
    primaryHref: "/contact-10",
    cards: [
      { title: "Local business support", text: "A Singapore-based IT partner for business devices, server rooms, and daily operations." },
      { title: "Product and service coverage", text: "Business computers, data center products, TOUGH server racks, UPS, and installation services." },
      { title: "Talk to Datacom", text: "Send an enquiry for quotes, setup support, product availability, or service planning.", href: "/contact-10" },
    ],
  },
  {
    slug: "it-support-maintenance-services",
    title: "IT Support and Maintenance Services",
    description: "IT installation, support, maintenance, troubleshooting, and infrastructure assistance for Singapore businesses.",
    active: "Services",
    primaryHref: "/home/services",
    cards: [
      { title: "IT installation", text: "Device, server, network, and office IT setup support for business teams." },
      { title: "Maintenance support", text: "Troubleshooting, upgrades, hardware replacement, and ongoing assistance." },
      { title: "Business enquiries", text: "Request support planning, site visits, product quotes, and deployment advice.", href: "/contact-10" },
    ],
  },
  {
    slug: "dell-products",
    title: "Dell Products Singapore",
    description: "Dell laptops, desktops, workstations, monitors, and business IT products from Datacom Enterprise.",
    active: "Business IT Products",
    primaryHref: "/shop",
    cards: [
      { title: "Dell laptops", text: "Business laptops for everyday work, remote teams, and office productivity.", href: "/category/dell" },
      { title: "Dell servers", text: "Server options for infrastructure, storage, and business workloads.", href: "/category/dell-server" },
      { title: "Quote support", text: "Ask for availability, configuration, and pricing support.", href: "/contact-10" },
    ],
  },
  {
    slug: "hp-products",
    title: "HP Products Singapore",
    description: "HP laptops, desktops, AI PCs, workstations, accessories, and business computer solutions.",
    active: "Business IT Products",
    primaryHref: "/shop",
    cards: [
      { title: "HP business computers", text: "HP devices for office, enterprise, and hybrid work teams.", href: "/category/untitled-hp" },
      { title: "AI PCs and laptops", text: "Modern HP EliteBook and AI-ready systems for business productivity.", href: "/product-page/hp-elitebook-8-g1i-14-ai-pc" },
      { title: "Business quote", text: "Send specifications to get help with model selection and pricing.", href: "/contact-10" },
    ],
  },
  {
    slug: "lenovo-products",
    title: "Lenovo Products Singapore",
    description: "Lenovo ThinkPad laptops, business computers, accessories, and IT hardware for Singapore companies.",
    active: "Business IT Products",
    primaryHref: "/category/lenovo",
    cards: [
      { title: "ThinkPad laptops", text: "Business notebooks for secure, reliable daily work.", href: "/category/lenovo" },
      { title: "Office devices", text: "Computer options for staff, departments, and projects.", href: "/shop" },
      { title: "Enquire now", text: "Ask for Lenovo availability, specifications, and quote support.", href: "/contact-10" },
    ],
  },
  {
    slug: "apple-products",
    title: "Apple Products Singapore",
    description: "Apple MacBook, iPad, and business device enquiries for Singapore organizations.",
    active: "Business IT Products",
    primaryHref: "/category/apple",
    cards: [
      { title: "Apple MacBook", text: "MacBook options for business and creative teams.", href: "/category/apple-macbook" },
      { title: "Apple iPad", text: "iPad options for sales, service, education, and mobile work.", href: "/category/apple-ipad" },
      { title: "Contact sales", text: "Request availability and business pricing assistance.", href: "/contact-10" },
    ],
  },
  {
    slug: "synology-products",
    title: "Synology NAS Singapore",
    description: "Synology NAS, DiskStation, RackStation, storage, backup, and network attached storage solutions.",
    active: "Data Center Products",
    primaryHref: "/category/datacenter-product",
    cards: [
      { title: "NAS storage", text: "Network attached storage for file sharing, backup, and business data management.", href: "/category/datacenter-product" },
      { title: "DiskStation and RackStation", text: "Synology systems for small offices, growing teams, and server environments.", href: "/shop" },
      { title: "Storage advice", text: "Ask Datacom to recommend capacity, backup, and deployment options.", href: "/contact-10" },
    ],
  },
  {
    slug: "apc-products",
    title: "APC UPS Singapore",
    description: "APC UPS, power supply, power protection, network management cards, and UPS accessories.",
    active: "Data Center Products",
    primaryHref: "/category/datacenter-product",
    cards: [
      { title: "UPS power protection", text: "APC UPS systems for servers, networking, and business continuity.", href: "/category/pdu" },
      { title: "Power accessories", text: "UPS cables, management cards, rack kits, and power support items.", href: "/shop" },
      { title: "Power planning", text: "Get help choosing UPS capacity and suitable backup runtime.", href: "/contact-10" },
    ],
  },
  {
    slug: "server-rack-cabinet",
    title: "Server Rack Cabinet Singapore",
    description: "TOUGH server racks, wall mount cabinets, floor-standing racks, rack accessories, PDU, and cable management.",
    active: "TOUGH Server Racks",
    primaryHref: "/s-projects-side-by-side",
    cards: [
      { title: "Server racks", text: "18U, 21U, 27U, 31U, 36U, 42U, 45U, and 48U rack options.", href: "/category/server-rack" },
      { title: "Wall mount cabinets", text: "6U, 9U, 12U, and 15U cabinets for offices and network rooms.", href: "/category/wall-mount-cabinet" },
      { title: "Accessories", text: "PDU, fan trays, fixed trays, castor wheels, locks, and cable management.", href: "/category/rack-accessories" },
    ],
  },
  {
    slug: "server-products",
    title: "Server Products Singapore",
    description: "Enterprise servers, HPE ProLiant servers, server racks, data center hardware, and infrastructure products.",
    active: "Data Center Products",
    primaryHref: "/business-it-products-2-1",
    cards: [
      { title: "HPE servers", text: "ProLiant server products for business workloads and infrastructure.", href: "/category/hpe-server" },
      { title: "Server racks", text: "Rack and cabinet options for safe server deployment.", href: "/server-rack-cabinet" },
      { title: "Storage and power", text: "Pair servers with Synology storage and APC UPS protection.", href: "/business-it-products-2-1" },
    ],
  },
  {
    slug: "accessories",
    title: "IT Accessories Singapore",
    description: "Cables, adapters, power cords, monitor arms, rack accessories, and business IT peripherals.",
    active: "Shop",
    primaryHref: "/category/accessories",
    cards: [
      { title: "Cables and adapters", text: "HDMI, VGA, DisplayPort, USB, power, and network accessories.", href: "/category/tough-cables-and-adapters" },
      { title: "Rack accessories", text: "PDU, trays, fan units, castor wheels, and cable management.", href: "/category/rack-accessories" },
      { title: "All products", text: "Browse the full Datacom product catalog.", href: "/shop" },
    ],
  },
  {
    slug: "all-products",
    title: "All Products",
    description: "Browse all Datacom products including laptops, servers, racks, UPS, storage, accessories, and data center hardware.",
    active: "Shop",
    primaryHref: "/shop",
    cards: [
      { title: "Business IT", text: "Laptops, desktops, workstations, and office products.", href: "/business-it-products-2" },
      { title: "Data center", text: "Servers, storage, racks, UPS, PDU, and accessories.", href: "/business-it-products-2-1" },
      { title: "Promotions", text: "Check available product promotions and offers.", href: "/promotion-1" },
    ],
  },
  {
    slug: "product-category-1",
    title: "Product Categories",
    description: "Explore Datacom product categories for laptops, servers, storage, racks, UPS, PDU, and accessories.",
    active: "Shop",
    primaryHref: "/product-category",
    cards: [
      { title: "Shop categories", text: "Browse product groups by brand, hardware type, and IT use case.", href: "/product-category" },
      { title: "All products", text: "See the full product catalog with current product pages.", href: "/shop" },
      { title: "Need help", text: "Ask Datacom to recommend a product or configuration.", href: "/contact-10" },
    ],
  },
  {
    slug: "promotion",
    title: "Promotions",
    description: "Datacom product promotions and special offers for IT hardware, business devices, and data center products.",
    active: "Promotion",
    primaryHref: "/promotion-1",
    cards: [
      { title: "Current promotion page", text: "View active Datacom promotions and offer details.", href: "/promotion-1" },
      { title: "Business quotes", text: "Ask for project pricing, bulk purchase, or tender support.", href: "/contact-10" },
      { title: "Shop products", text: "Browse products and request availability.", href: "/shop" },
    ],
  },
];

export const legacyCategories: LegacyCategory[] = [
  { slug: "dell", title: "Dell", description: "Dell laptops, desktops, servers, and business products.", keywords: ["dell", "latitude"] },
  { slug: "apple-ipad", title: "Apple iPad", description: "Apple iPad options for business and mobile teams.", keywords: ["ipad", "apple"] },
  { slug: "rack-accessories", title: "Rack Accessories", description: "Rack trays, fans, castor wheels, locks, and cable management.", keywords: ["rack", "tray", "fan", "castor", "cable management"] },
  { slug: "hpe-server", title: "HPE Server", description: "HPE ProLiant server products for business infrastructure.", keywords: ["hpe", "proliant"] },
  { slug: "tough-cables-and-adapters", title: "TOUGH Cables and Adapters", description: "TOUGH and IT cables, adapters, display cables, and connectivity accessories.", keywords: ["cable", "adapter", "usb", "hdmi", "vga", "display"] },
  { slug: "promotions", title: "Promotions", description: "Current Datacom promotions and special offers.", keywords: ["promotion"] },
  { slug: "all-products", title: "All Products", description: "All Datacom products across business IT and data center hardware.", keywords: [] },
  { slug: "apple", title: "Apple", description: "Apple devices and business products.", keywords: ["apple", "macbook", "ipad"] },
  { slug: "pdu", title: "PDU", description: "Power distribution units and rack power accessories.", keywords: ["pdu", "power", "socket", "ups"] },
  { slug: "tough", title: "TOUGH", description: "TOUGH racks, cabinets, accessories, and power products.", keywords: ["tough"] },
  { slug: "new-arrival", title: "New Arrival", description: "Newly added products from Datacom.", keywords: [] },
  { slug: "lenovo", title: "Lenovo", description: "Lenovo ThinkPad and business devices.", keywords: ["lenovo", "thinkpad"] },
  { slug: "apple-macbook", title: "Apple MacBook", description: "MacBook products for business and creative teams.", keywords: ["macbook", "apple"] },
  { slug: "tough-server-rack-wall-mount", title: "TOUGH Server Rack Wall Mount", description: "TOUGH wall mount cabinet and rack products.", keywords: ["wall mount", "cabinet", "rack"] },
  { slug: "datacenter-product", title: "Datacenter Product", description: "Servers, storage, UPS, racks, and data center infrastructure.", keywords: ["server", "synology", "apc", "ups", "rack", "hpe"] },
  { slug: "accessories", title: "Accessories", description: "IT accessories, cables, adapters, power, and rack accessories.", keywords: ["cable", "adapter", "accessory", "mouse", "keyboard"] },
  { slug: "tough-cart", title: "TOUGH Cart", description: "TOUGH cart and mobile equipment products.", keywords: ["cart"] },
  { slug: "untitled-hp", title: "HP", description: "HP laptops, EliteBook, and business computers.", keywords: ["hp", "elitebook"] },
  { slug: "dell-server", title: "Dell Server", description: "Dell server and infrastructure products.", keywords: ["dell", "server"] },
  { slug: "wall-mount-cabinet", title: "Wall Mount Cabinet", description: "Wall mount cabinets for network and IT equipment.", keywords: ["wall mount", "cabinet"] },
  { slug: "lcd-stand", title: "LCD Stand", description: "LCD stands, monitor arms, and display accessories.", keywords: ["lcd", "monitor", "stand", "arm"] },
  { slug: "laptop", title: "Laptop", description: "Business laptops from HP, Dell, Lenovo, and Apple.", keywords: ["laptop", "thinkpad", "elitebook", "latitude", "macbook"] },
  { slug: "server-rack", title: "Server Rack", description: "Server racks, equipment racks, and rack cabinet products.", keywords: ["rack", "equipment rack", "42u", "36u", "21u", "cabinet"] },
];

export const legacyPosts: LegacyPost[] = [
  {
    slug: "6-benefits-of-using-a-server-rack",
    title: "6 Benefits of Using a Server Rack",
    description: "Why server racks help organize, protect, cool, and scale business IT infrastructure.",
    topic: "server rack planning",
    relatedHref: "/server-rack-cabinet",
  },
  {
    slug: "everything-you-need-to-know-about-choosing-storage-solutions-for-your-data-center",
    title: "Choosing Storage Solutions for Your Data Center",
    description: "Key points for selecting reliable storage solutions for data center and business workloads.",
    topic: "data center storage",
    relatedHref: "/synology-products",
  },
  {
    slug: "network-attached-storage-nas-guide-singapore",
    title: "Network Attached Storage NAS Guide Singapore",
    description: "A Singapore business guide to NAS storage, file sharing, backup, and remote access.",
    topic: "network attached storage",
    relatedHref: "/synology-products",
  },
  {
    slug: "it-support-installation-services-in-singapore",
    title: "IT Support Installation Services in Singapore",
    description: "How IT support and installation services help Singapore businesses deploy and maintain systems.",
    topic: "IT support services",
    relatedHref: "/it-support-maintenance-services",
  },
  {
    slug: "how-to-choose-a-server-rack-supplier-in-singapore",
    title: "How to Choose a Server Rack Supplier in Singapore",
    description: "What to check when choosing a reliable server rack supplier in Singapore.",
    topic: "server rack supplier",
    relatedHref: "/server-rack-cabinet",
  },
  {
    slug: "synology-nas-singapore-a-2026-buyer-s-guide",
    title: "Synology NAS Singapore: 2026 Buyer's Guide",
    description: "Buying guidance for Synology NAS systems, storage capacity, backup, and business use.",
    topic: "Synology NAS",
    relatedHref: "/synology-products",
  },
  {
    slug: "ups-power-supply-selection-it-infrastructure",
    title: "UPS Power Supply Selection for IT Infrastructure",
    description: "How to choose UPS power supply capacity and protection for business IT systems.",
    topic: "UPS power supply",
    relatedHref: "/apc-products",
  },
  {
    slug: "nas-storage-explained-for-business-use",
    title: "NAS Storage Explained for Business Use",
    description: "NAS storage basics for business file sharing, backups, and data management.",
    topic: "NAS storage",
    relatedHref: "/synology-products",
  },
  {
    slug: "hp-business-computers-workstations-guide",
    title: "HP Business Computers and Workstations Guide",
    description: "HP computer and workstation options for business productivity and professional work.",
    topic: "HP business computers",
    relatedHref: "/hp-products",
  },
  {
    slug: "choosing-the-right-dell-laptop-singapore-partner-for-your-business-a-2026-guide",
    title: "Choosing the Right Dell Laptop Singapore Partner",
    description: "What businesses should consider when sourcing Dell laptops in Singapore.",
    topic: "Dell laptops",
    relatedHref: "/dell-products",
  },
  {
    slug: "flexible-storage-management-demystifying-advanced-storage-technologies",
    title: "Flexible Storage Management and Advanced Storage Technologies",
    description: "A practical look at storage management for reliable business operations.",
    topic: "storage management",
    relatedHref: "/synology-products",
  },
  {
    slug: "a-guide-to-choosing-the-right-ups-for-your-needs",
    title: "A Guide to Choosing the Right UPS",
    description: "Important factors when choosing a UPS for business equipment and server rooms.",
    topic: "UPS selection",
    relatedHref: "/apc-products",
  },
  {
    slug: "apc-ups-singapore-complete-guide-to-reliable-power-protection-solutions",
    title: "APC UPS Singapore Complete Guide",
    description: "Reliable APC UPS power protection solutions for servers, networks, and offices.",
    topic: "APC UPS",
    relatedHref: "/apc-products",
  },
  {
    slug: "network-server-rack-types-and-configurations-practical-guide-for-business-it",
    title: "Network Server Rack Types and Configurations",
    description: "A practical guide to server rack types, sizes, and configuration choices.",
    topic: "network server rack",
    relatedHref: "/server-rack-cabinet",
  },
  {
    slug: "data-center-storage-solutions-singapore",
    title: "Data Center Storage Solutions Singapore",
    description: "Storage solution options for Singapore data centers and business IT teams.",
    topic: "data center storage solutions",
    relatedHref: "/synology-products",
  },
  {
    slug: "optimising-server-room-layouts-the-art-of-efficient-server-rack-placement",
    title: "Optimising Server Room Layouts and Server Rack Placement",
    description: "How rack placement and layout improve server room efficiency, airflow, and access.",
    topic: "server room layout",
    relatedHref: "/server-rack-cabinet",
  },
  {
    slug: "what-is-a-ups-and-why-do-you-need-it-for-your-data-centre",
    title: "What Is a UPS and Why Do You Need It for Your Data Centre",
    description: "UPS basics for protecting data centre equipment and critical IT systems.",
    topic: "UPS data centre",
    relatedHref: "/apc-products",
  },
  {
    slug: "a-guide-to-data-backup-strategies",
    title: "A Guide to Data Backup Strategies",
    description: "Backup planning ideas for protecting business data and reducing downtime risk.",
    topic: "data backup",
    relatedHref: "/synology-products",
  },
  {
    slug: "the-importance-of-server-security-and-how-to-secure-your-server",
    title: "The Importance of Server Security",
    description: "Server security basics for protecting business systems, access, and data.",
    topic: "server security",
    relatedHref: "/server-products",
  },
  {
    slug: "server-rack-singapore-complete-guide-to-buying-enterprise-server-racks",
    title: "Server Rack Singapore Complete Buying Guide",
    description: "Enterprise server rack buying guidance for Singapore offices and data centers.",
    topic: "server rack Singapore",
    relatedHref: "/server-rack-cabinet",
  },
  {
    slug: "the-importance-of-effective-cable-management-in-modern-network-performance",
    title: "Effective Cable Management in Modern Network Performance",
    description: "Why cable management improves network reliability, maintenance, and airflow.",
    topic: "cable management",
    relatedHref: "/category/rack-accessories",
  },
];

export const legacyPagePaths = legacyPages.map((page) => `/${page.slug}`);
export const legacyCategoryPaths = legacyCategories.map((category) => `/category/${category.slug}`);
export const legacyPostPaths = legacyPosts.map((post) => `/post/${post.slug}`);

export const legacyPageBySlug = Object.fromEntries(legacyPages.map((page) => [page.slug, page]));
export const legacyCategoryBySlug = Object.fromEntries(legacyCategories.map((category) => [category.slug, category]));
export const legacyPostBySlug = Object.fromEntries(legacyPosts.map((post) => [post.slug, post]));
