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
  { label: "Admin sign-in and roles", status: "Needs backend" },
  { label: "Form spam protection", status: "Needs provider" },
  { label: "Database backups", status: "Needs D1" },
  { label: "Audit log for edits", status: "Planned" },
];
