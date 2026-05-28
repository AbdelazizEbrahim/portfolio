import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import React from 'react';
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Abdelaziz Ebrahim | Full-Stack Engineer",
  description:
    "Full-stack engineer building multi-tenant business platforms—POS, pharmacy, and cafe systems with PostgreSQL, Prisma, Socket.IO, and real-time operations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${jetbrainsMono.variable} px-5`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
