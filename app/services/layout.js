import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Services",
  "Enterprise web apps, POS, pharmacy inventory, e-commerce APIs, real-time systems, and localization."
);

export default function ServicesLayout({ children }) {
  return children;
}
