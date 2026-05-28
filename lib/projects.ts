/**
 * Single source of truth for portfolio projects (landing, work, case studies).
 */

export type ProjectStatus = "live" | "in-development" | "github-only";

export type PortfolioProject = {
  slug: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** public/projects/{slug}/01.* — set via projectCover() */
  coverSrc: string;
  /** Legacy image in /public root for older projects */
  legacyImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  showGithub: boolean;
  featured: boolean;
  status: ProjectStatus;
};

export const projectCover = (slug: string) => `/projects/${slug}/01.svg`;

// ——— Landing-only content ———

export const heroContent = {
  role: "Full-stack engineer",
  headline: "Building multi-tenant business platforms",
  intro:
    "I design and ship production-grade systems for retail, pharmacy, and restaurant operations—multi-branch inventory, real-time workflows, RBAC, and Ethiopian market needs (Telebirr, M-Pesa, EN/AM, dual calendar).",
};

export const landingStats = [
  { num: 3, text: "Live enterprise platforms" },
  { num: 30, suffix: "+", text: "API & domain modules" },
  { num: 10, suffix: "+", text: "Business reports per app" },
  { num: 3, text: "Real-time Socket.IO apps" },
];

export const techStackGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Redux", "React Query", "Tailwind"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "NextAuth"],
  },
  {
    label: "Platform",
    items: ["Socket.IO", "REST APIs", "RBAC", "Multi-tenant", "i18n", "Audit logs"],
  },
];

// ——— Flagship (featured) ———

export const flagshipProjects: PortfolioProject[] = [
  {
    slug: "cyber-pos",
    num: "01",
    category: "Enterprise · Full-stack",
    title: "Cyber POS",
    tagline: "Multi-tenant POS & inventory for retail and hospitality",
    description:
      "Production-grade point of sale and ERP-lite for multi-branch businesses: classic retail POS, purchasing, stock control, finance, reporting, and a dedicated cafe/restaurant workflow with real-time kitchen coordination.",
    highlights: [
      "Real-time cafe pipeline (waiter → kitchen → payment) via Socket.IO",
      "POS terminal with multi-payment, tax-inclusive pricing, and receipt printing",
      "Branch stock, transfers, stock requests, and immutable stock movement ledger",
      "Telebirr, M-Pesa, cash, bank transfer, refunds, and centralized payments",
      "9+ business reports, audit logs, RBAC, and bilingual EN/AM UI",
      "Next.js 16 + Express + Prisma on PostgreSQL — deployed live",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "NextAuth",
      "JWT",
    ],
    coverSrc: projectCover("cyber-pos"),
    liveUrl: "https://cyberpos.vercel.app/",
    showGithub: false,
    featured: true,
    status: "live",
  },
  {
    slug: "orderpulse",
    num: "02",
    category: "Enterprise · Full-stack",
    title: "OrderPulse",
    tagline: "Cafe & restaurant operations for Ethiopian businesses",
    description:
      "OrderPulse (cafe-management) is a multi-tenant platform combining cafe order lifecycle management with inventory, purchases, sales, stock transfers, expenses, and operational reporting—built for Ethiopian cafes and restaurants.",
    highlights: [
      "End-to-end cafe orders: PENDING → SERVED → PAID with role-specific UIs",
      "Live updates for waiter, kitchen, payment, supervisor, and order transfers",
      "Multi-company, multi-branch model with passcode staff and branch RBAC",
      "Integrated POS, inventory, transactions, and centralized payments",
      "Dashboard with period comparison, 9+ reports, and export to Excel/PDF",
      "Gregorian storage with Ethiopian calendar display and full i18n (en/am)",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "Redux",
      "NextAuth",
    ],
    coverSrc: projectCover("orderpulse"),
    liveUrl: "https://orderpulse.vercel.app/",
    showGithub: false,
    featured: true,
    status: "live",
  },
  {
    slug: "pharma-flow",
    num: "03",
    category: "Enterprise · Full-stack",
    title: "Pharma Flow",
    tagline: "Pharmacy & distributor inventory with batch/expiry tracking",
    description:
      "Enterprise web application for pharmacies and pharmaceutical distributors: batch-aware inventory, POS-style transactions, inter-branch transfers, financial reporting, expenses, RBAC, and real-time notifications.",
    highlights: [
      "Batch split, merge, transfer, and expiry-aware branch stock",
      "Cart workflow for sales, purchases, imports, adjustments, and reversals",
      "Inter-branch transfers with batch-level line items and notifications",
      "10+ financial reports plus company-wide analytics dashboard",
      "TanStack React Query, permission-driven navigation, 50+ screens",
      "Ethiopian payments, dual calendar, and English/Amharic localization",
    ],
    stack: [
      "Next.js 15",
      "React 18",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Socket.IO",
      "React Query",
      "NextAuth",
    ],
    coverSrc: projectCover("pharma-flow"),
    liveUrl: "https://pharmaflow.vercel.app/",
    showGithub: false,
    featured: true,
    status: "live",
  },
];

// ——— More projects (secondary) ———

export const moreProjects: PortfolioProject[] = [
  {
    slug: "docuiva",
    num: "01",
    category: "Full-stack",
    title: "DocuIva",
    tagline: "Document workflow & management",
    description:
      "Document management application for organizing, tracking, and working with business documents. Built with a mobile-first UI and bilingual support (English & Amharic).",
    highlights: [
      "Structured document workflows",
      "Role-based access",
      "Bilingual UI (EN / AM)",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    coverSrc: projectCover("docuiva"),
    showGithub: false,
    featured: false,
    status: "in-development",
  },
  {
    slug: "cprms",
    num: "02",
    category: "Full-stack · Healthcare",
    title: "CPRMS",
    tagline: "Clinical Patient Record Management System",
    description:
      "Healthcare record management with role-based access: patient registration, record tracking, appointment scheduling, secure server-side handling, and responsive UI with Next.js API routes.",
    highlights: [
      "Patient registration and clinical records",
      "Appointment scheduling",
      "Role-based access control",
    ],
    stack: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript", "ShadCN"],
    coverSrc: projectCover("cprms"),
    legacyImage: "/cprms.png",
    liveUrl: "https://cprms.vercel.app",
    githubUrl: "https://github.com/AbdelazizEbrahim/cprms",
    showGithub: true,
    featured: false,
    status: "live",
  },
  {
    slug: "bahirmart-mobile",
    num: "03",
    category: "Mobile",
    title: "Bahir Mart Mobile",
    tagline: "Customer marketplace & auction app",
    description:
      "Flutter customer app for Bahir Mart: product ordering, auction bidding, order tracking, and integrated payments.",
    highlights: [
      "Product ordering and auctions",
      "Order tracking",
      "Flutter + Next.js backend",
    ],
    stack: ["Flutter", "Dart", "Next.js"],
    coverSrc: projectCover("bahirmart-mobile"),
    legacyImage: "/bahir mobile.png",
    githubUrl: "https://github.com/AbdelazizEbrahim/bahirmart",
    showGithub: true,
    featured: false,
    status: "github-only",
  },
  {
    slug: "bahirmart-web",
    num: "04",
    category: "Full-stack",
    title: "Bahir Mart Marketplace",
    tagline: "Marketplace with auctions & fraud detection",
    description:
      "Marketplace and auction platform with location-based filtering, merchant verification, AI-assisted fraud detection, disputes, delivery tracking, real-time auctions, and chatbot integration.",
    highlights: [
      "Real-time auction system (Socket.IO)",
      "Merchant verification and dispute handling",
      "AI-powered fraud product detection",
    ],
    stack: [
      "Next.js",
      "Socket.IO",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
    ],
    coverSrc: projectCover("bahirmart-web"),
    legacyImage: "/Bahir Market photo.png",
    githubUrl: "https://github.com/AbdelazizEbrahim/bahirmart-web",
    showGithub: true,
    featured: false,
    status: "github-only",
  },
  {
    slug: "bahirmart-admin",
    num: "05",
    category: "Full-stack",
    title: "Bahir Mart Admin",
    tagline: "Operations dashboard for marketplace & auctions",
    description:
      "Admin dashboard for marketplace supervision: merchant verification, fraud detection, user management, disputes and refunds, stock and delivery tracking, and auction oversight.",
    highlights: [
      "Merchant and user management",
      "Dispute and refund resolution",
      "Auction and delivery supervision",
    ],
    stack: [
      "Next.js",
      "Socket.IO",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
    ],
    coverSrc: projectCover("bahirmart-admin"),
    legacyImage: "/Bahir admin.png",
    githubUrl: "https://github.com/AbdelazizEbrahim/bahirmart-admin",
    showGithub: true,
    featured: false,
    status: "github-only",
  },
];

export const allWorkProjects = [...flagshipProjects, ...moreProjects];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return allWorkProjects.find((p) => p.slug === slug);
}

/** Gallery image paths: public/projects/{slug}/01–09 */
export function projectGallerySources(slug: string, max = 9): string[] {
  const ext = ["webp", "png", "jpg", "jpeg"];
  const sources: string[] = [];
  for (let i = 1; i <= max; i++) {
    const num = String(i).padStart(2, "0");
    for (const e of ext) {
      sources.push(`/projects/${slug}/${num}.${e}`);
    }
  }
  return sources;
}
