import { getProjectBySlug, type PortfolioProject } from "./projects";

export type CaseStudyFeature = {
  title: string;
  description: string;
};

export type CaseStudyDetail = {
  problem: string;
  solution: string;
  role: string;
  features: CaseStudyFeature[];
  architecture: {
    summary: string;
    layers: { name: string; detail: string }[];
  };
  techDetails: { label: string; items: string[] }[];
};

const caseStudyMap: Record<string, CaseStudyDetail> = {
  "cyber-pos": {
    problem:
      "Multi-branch retail and hospitality businesses need one system for POS checkout, inventory, finance, and cafe operations—with local payments, bilingual staff, and real-time kitchen coordination.",
    solution:
      "Cyber POS is a production SaaS-style monorepo: Next.js frontend and Express API on PostgreSQL with Prisma, Socket.IO for live cafe orders and notifications, and strict multi-tenant RBAC across companies and branches.",
    role: "End-to-end design and implementation—frontend, backend, database schema, real-time layer, and deployment.",
    features: [
      {
        title: "Real-time cafe operations",
        description:
          "Waiter, kitchen, payment, and supervisor screens stay in sync via company-scoped Socket.IO rooms and JWT-authenticated connections.",
      },
      {
        title: "POS terminal",
        description:
          "Full checkout with cart, tax-inclusive pricing, Telebirr/M-Pesa/cash/bank payments, receipt printing, and transaction reversal.",
      },
      {
        title: "Inventory & stock ledger",
        description:
          "Branch stock, inter-branch transfers, stock requests, bulk CSV/Excel import, and immutable stock movement audit trail.",
      },
      {
        title: "Finance & reporting",
        description:
          "Centralized payments, expenses, 9+ report types, dashboards, and audit logs for compliance-sensitive mutations.",
      },
      {
        title: "Local market ready",
        description:
          "English/Amharic UI, Gregorian + Ethiopian calendar, and business-type-aware flows (pharmacy, retail, cafe, and more).",
      },
    ],
    architecture: {
      summary:
        "Feature-based monorepo: thin controllers, service-layer business logic, Prisma data access, and a shared real-time emitter on the same HTTP server.",
      layers: [
        { name: "Next.js 16 client", detail: "App Router, NextAuth, apiClient, cafe & notification sockets" },
        { name: "Express REST API", detail: "30+ modules, Joi validation, global error handler, Swagger" },
        { name: "PostgreSQL", detail: "30+ Prisma models, multi-tenant company/branch scoping" },
        { name: "Socket.IO", detail: "user:{id} and company:{id} rooms for notifications and cafe orders" },
      ],
    },
    techDetails: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Bootstrap / Ant Design", "react-i18next", "ApexCharts"] },
      { label: "Backend", items: ["Node.js", "Express 4", "Prisma 5", "Joi", "Winston", "Multer", "node-cron"] },
      { label: "Auth & security", items: ["JWT + refresh", "NextAuth", "Helmet", "rate limiting", "audit middleware"] },
    ],
  },
  orderpulse: {
    problem:
      "Ethiopian cafes and restaurants need coordinated order flow from table to kitchen to payment, plus back-office inventory and finance—without stale screens or manual refresh.",
    solution:
      "OrderPulse (OrderPulse branding) prioritizes cafe order management while supporting full ERP-lite flows: inventory, transactions, payments, expenses, and reporting on a multi-company PostgreSQL model.",
    role: "Solo full-stack delivery—cafe domain first, shared platform patterns, bilingual UX, and real-time order broadcasts.",
    features: [
      {
        title: "Cafe order pipeline",
        description:
          "Statuses from PENDING through SERVED/PAID, dine-in and takeaway, waiter transfers, passcode staff actions, and daily bono workflows.",
      },
      {
        title: "Role-specific screens",
        description:
          "Dedicated routes for waiter, kitchen, payment, supervisor, and transfer management with activity-based loading states.",
      },
      {
        title: "Integrated POS & inventory",
        description:
          "Menu-only and stock-backed items, purchases, sales hub, branch transfers, and low-stock alerts feeding operations.",
      },
      {
        title: "Payments & finance",
        description:
          "Central Payments model linked to cafe orders, transactions, and expenses—Telebirr, M-Pesa, cash, bank transfer, refunds.",
      },
      {
        title: "Operations intelligence",
        description:
          "New dashboard with period comparison, cafe order reports, P&L, and Excel/PDF exports with English labels and Gregorian dates.",
      },
    ],
    architecture: {
      summary:
        "Same production pattern as enterprise POS: Redux + persisted session on the client, thin Express controllers, Prisma services, and company-room socket events for every order state change.",
      layers: [
        { name: "Next.js 16 + Redux", detail: "Feature folders, NextAuth, useCafeOrderSocket, i18n namespaces" },
        { name: "Express API", detail: "cafe-orders, pos, transactions, reports, audit, notifications" },
        { name: "PostgreSQL", detail: "Multi-branch tenancy, denormalized line snapshots, scoped order numbers" },
        { name: "Socket.IO", detail: "cafe-order-created/updated/served/paid/status-changed events" },
      ],
    },
    techDetails: [
      { label: "Frontend", items: ["Next.js 16", "React 19", "Redux Toolkit", "Socket.io-client", "Bootstrap", "PrimeReact"] },
      { label: "Backend", items: ["Express", "Prisma", "PostgreSQL", "Joi", "Swagger", "Jest / Newman"] },
      { label: "Platform", items: ["Multi-tenant RBAC", "Audit logs", "Global search", "Web push (optional)"] },
    ],
  },
  "pharma-flow": {
    problem:
      "Pharmacies and distributors must track batch-level stock, expiry, inter-branch movement, and financial performance—while supporting Ethiopian payment rails and bilingual staff.",
    solution:
      "Pharma Flow delivers batch-aware inventory, POS-style cart sales, transfers, 10+ reports, company analytics, and real-time notifications on a permission-driven Next.js 15 + Express stack.",
    role: "Full-stack architecture and feature delivery across 50+ screens, React Query data layer, and pharmacy-specific batch operations.",
    features: [
      {
        title: "Batch & expiry inventory",
        description:
          "Batches per item, branch stock batches, expired stock views, bin card detail, and batch split/merge/transfer with stock movements.",
      },
      {
        title: "Transactions & cart",
        description:
          "Sales, purchases, imports, adjustments, waste/damage, reversals, and partial multi-method payments on transactions.",
      },
      {
        title: "Inter-branch transfers",
        description:
          "Pending → completed/rejected/returned workflow with batch-level lines and socket notifications to branch users.",
      },
      {
        title: "Analytics & reports",
        description:
          "Dashboard KPIs, profit & loss, annual report, customer due, best seller, and cross-branch company analytics.",
      },
      {
        title: "Enterprise UX",
        description:
          "next-intl (EN/AM), EC/GC calendars, offline indicator, mobile card lists, and granular permissions on every module.",
      },
    ],
    architecture: {
      summary:
        "Monorepo with TanStack React Query on the frontend, feature-based Express modules, and Socket.IO notifications on the shared HTTP server.",
      layers: [
        { name: "Next.js 15 App Router", detail: "Route groups, NextAuth credentials, usePermissions sidebar" },
        { name: "Express + Prisma", detail: "batch-operations, transactions, transfers, reports, company-analytics" },
        { name: "PostgreSQL", detail: "30+ models, Decimal money/qty, cascade by company ownership" },
        { name: "Socket.IO", detail: "JWT handshake, user rooms, transaction/transfer/stock notifications" },
      ],
    },
    techDetails: [
      { label: "Frontend", items: ["Next.js 15", "React 18", "React Query 5", "Tailwind", "Framer Motion", "Zod + RHF"] },
      { label: "Backend", items: ["Express", "Prisma", "PostgreSQL", "Joi", "Winston", "node-cron"] },
      { label: "Quality", items: ["ESLint / Prettier / Husky", "Jest + Supertest", "Postman collections"] },
    ],
  },
};

export function getCaseStudy(slug: string): (PortfolioProject & CaseStudyDetail) | null {
  const project = getProjectBySlug(slug);
  if (!project?.featured) return null;
  const detail = caseStudyMap[slug];
  if (!detail) return null;
  return { ...project, ...detail };
}

export function getCaseStudySlugs(): string[] {
  return Object.keys(caseStudyMap);
}

export function getAdjacentCaseStudies(slug: string) {
  const slugs = getCaseStudySlugs();
  const index = slugs.indexOf(slug);
  return {
    prev: index > 0 ? slugs[index - 1] : null,
    next: index < slugs.length - 1 ? slugs[index + 1] : null,
  };
}
