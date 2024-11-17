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
  title: "Abdelaziz Ebrahim",
  description: "Abdelaziz personal portfolio",
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
