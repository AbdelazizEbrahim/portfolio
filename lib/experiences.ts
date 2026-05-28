export type Experience = {
  company: string;
  position: string;
  duration: string;
  description: string;
  links?: { label: string; href: string }[];
};

export const experiences: Experience[] = [
  {
    company: "Cyber Tech",
    position: "Full Stack Developer",
    duration: "September 2025 – Present",
    description:
      "Building scalable SaaS and business platforms with Next.js, Node.js, PostgreSQL, and TypeScript. Delivered Dociva (document workflows) and Cyber POS (multi-tenant POS & inventory)—backend APIs, authentication, dashboards, debugging, and production feature releases.",
    links: [
      { label: "Dociva", href: "https://dociva.et/" },
      { label: "Cyber POS", href: "https://cyberpos.vercel.app/" },
    ],
  },
  {
    company: "Tinamart E-Commerce",
    position: "Contract Full Stack Developer",
    duration: "July 2025 – Present",
    description:
      "Developed and maintained e-commerce backend systems using Laravel and MySQL while contributing to the Next.js frontend. API integrations, database optimization, payment flows, and scalable order/catalog workflows.",
    links: [{ label: "Tinamart", href: "https://tinamart.com/" }],
  },
  {
    company: "Nile Technology Solution",
    position: "Remote Full Stack Developer",
    duration: "October 2024 – August 2025",
    description:
      "Built and contributed to the Nilecare healthcare platform with Node.js, Express.js, and MongoDB—backend services, authentication, and medical record management workflows for clinical operations.",
    links: [{ label: "Nilecare", href: "https://care.niletech.co/" }],
  },
  {
    company: "Ibex Technologies and Promotion",
    position: "Full Stack Developer Intern",
    duration: "July 2024 – October 2024",
    description:
      "Full-stack e-learning platform with Next.js, Node.js, MongoDB, Firebase, and Tailwind CSS. REST APIs, Chapa payment integration, and frontend/backend architecture.",
  },
];
