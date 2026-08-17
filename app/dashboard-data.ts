export type DashboardLead = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: string;
  interest: string;
  status: "New" | "Open" | "Replied" | "Closed";
  receivedAt: string;
  message: string;
};

export type DashboardOrder = {
  id: string;
  customer: string;
  date: string;
  payment: "Paid" | "Pending" | "Manual";
  fulfillment: "Fulfilled" | "Processing" | "New";
  total: string;
  itemCount: number;
};

export type DashboardTraffic = {
  label: string;
  value: string;
  note: string;
};

export const seoTasks = [
  { label: "SEO setup checklist", status: "Connected", tone: "green" },
  { label: "Sitemap submitted", status: "179 pages", tone: "green" },
  { label: "Indexing", status: "Monitoring", tone: "blue" },
  { label: "Completed tasks", status: "7", tone: "green" },
];

export const seoTools = [
  "SEO setup checklist",
  "SEO page titles and meta descriptions",
  "URL redirect manager",
  "Google site verification",
  "XML sitemaps",
  "Robots.txt editor",
  "LLMs.txt / AI crawler guidance",
  "Structured data for products and organization",
];

export const aiVisibility: Array<{ platform: string; seen: string; pages: string }> = [];

export const migrationSummary = [
  { label: "Priority Wix URLs", status: "8 mapped", tone: "blue" },
  { label: "Redirect decisions", status: "6 pending", tone: "red" },
  { label: "Page 1 keyword peak", status: "16", tone: "green" },
  { label: "Test domain safety", status: "Noindex", tone: "blue" },
];

export const migrationUrlMap = [
  {
    oldPath: "/it-support-maintenance-services",
    newPath: "/home/services",
    keywords: "it installation services, rank 1",
    action: "Preserve exact URL or add 301 redirect",
    priority: "Critical",
  },
  {
    oldPath: "/dell-products",
    newPath: "/business-it-products-2",
    keywords: "dell laptops, dell computers",
    action: "Create matching page or redirect",
    priority: "Critical",
  },
  {
    oldPath: "/hp-products",
    newPath: "/business-it-products-2",
    keywords: "hp laptops, hp desktops, hp computers",
    action: "Create matching page or redirect",
    priority: "High",
  },
  {
    oldPath: "/server-rack-cabinet",
    newPath: "/s-projects-side-by-side",
    keywords: "server rack singapore, supplier",
    action: "Preserve URL if possible",
    priority: "Critical",
  },
  {
    oldPath: "/synology-products",
    newPath: "/business-it-products-2-1",
    keywords: "synology nas, nas storage",
    action: "Create category landing page",
    priority: "High",
  },
  {
    oldPath: "/apc-products",
    newPath: "/business-it-products-2-1",
    keywords: "apc ups, apc ups singapore",
    action: "Create category landing page",
    priority: "High",
  },
  {
    oldPath: "/post/everything-you-need-to-know-about-choosing-storage-solutions-for-your-data-center",
    newPath: "/explore",
    keywords: "data center storage solutions, rank 2",
    action: "Recreate article or redirect to same topic",
    priority: "Critical",
  },
  {
    oldPath: "/explore",
    newPath: "/explore",
    keywords: "paid traffic landing page",
    action: "Keep campaign page clean",
    priority: "Medium",
  },
];

export const migrationKeywordGroups = [
  {
    group: "Installation services",
    best: "Rank 1",
    volume: "50",
    oldUrl: "/it-support-maintenance-services",
    nextStep: "Protect URL first before DNS switch.",
  },
  {
    group: "Dell products",
    best: "Rank 6",
    volume: "2,900",
    oldUrl: "/dell-products",
    nextStep: "Dedicated Dell page with title, FAQ, product links.",
  },
  {
    group: "HP products",
    best: "Rank 6",
    volume: "3,600",
    oldUrl: "/hp-products",
    nextStep: "Dedicated HP page or clean 301 from old URL.",
  },
  {
    group: "Server rack cabinet",
    best: "Rank 4",
    volume: "1,300",
    oldUrl: "/server-rack-cabinet",
    nextStep: "Do not merge with general products page.",
  },
  {
    group: "Synology NAS",
    best: "Rank 7",
    volume: "1,600",
    oldUrl: "/synology-products",
    nextStep: "Keep NAS content separate from APC/UPS content.",
  },
  {
    group: "APC UPS",
    best: "Rank 8",
    volume: "590",
    oldUrl: "/apc-products",
    nextStep: "Build UPS category copy and quote CTA.",
  },
  {
    group: "Data center storage",
    best: "Rank 2",
    volume: "10",
    oldUrl: "/post/everything-you-need-to-know-about-choosing-storage-solutions-for-your-data-center",
    nextStep: "Recreate article content before redirect.",
  },
];

export const migrationRules = [
  "Keep Wix live until final DNS cutover day.",
  "Keep this testing domain private or noindex; do not submit its sitemap to Google.",
  "Every old Wix URL must have one clear new page or one 301 redirect.",
  "Do not combine Dell, HP, Synology, APC, and server-rack keywords into one mixed page.",
  "After launch, submit the final sitemap and watch Search Console for 30 days.",
  "Forms, checkout, WhatsApp, email, and visitor tracking must be tested before domain switch.",
];

export const inboxLeads: DashboardLead[] = [];

export const recentOrders: DashboardOrder[] = [];

export const trafficCards: DashboardTraffic[] = [
  { label: "Active now", value: "Not connected", note: "Analytics tracking is not connected yet" },
  { label: "Today's visitors", value: "Not connected", note: "Analytics tracking is not connected yet" },
  { label: "Top location", value: "Not connected", note: "Location tracking is not connected yet" },
  { label: "Top device", value: "Not connected", note: "Device tracking is not connected yet" },
];

export const deviceBreakdown: Array<{ label: string; value: number }> = [];

export const locationBreakdown: Array<{ label: string; value: number }> = [];

export const securityChecks = [
  { label: "HTTPS and secure cookies", status: "Ready" },
  { label: "Owner dashboard login", status: "Ready" },
  { label: "Staff roles", status: "Planned" },
  { label: "Form spam protection", status: "Needs provider" },
  { label: "Database backups", status: "Needs Supabase policy" },
  { label: "Audit log for edits", status: "Planned" },
];
