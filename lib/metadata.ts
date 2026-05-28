const siteName = "Abdelaziz Ebrahim";

export function createPageMetadata(title: string, description: string) {
  return {
    title: `${title} · ${siteName}`,
    description,
  };
}

export const siteMetadata = createPageMetadata(
  "Full-Stack Engineer",
  "Multi-tenant business platforms—DocuIva, Cyber POS, OrderPulse, Pharma Flow, and production APIs with PostgreSQL, Prisma, and Socket.IO."
);
