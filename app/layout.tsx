import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { siteMetadata } from "@/lib/metadata";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
  adjustFontFallback: true,
});

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${jetbrainsMono.variable} px-4 sm:px-5 overflow-x-hidden max-w-[100vw]`}
      >
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#232329",
              color: "#fff",
              border: "1px solid rgba(0,255,153,0.35)",
            },
            error: { iconTheme: { primary: "#00ff99", secondary: "#1c1c22" } },
          }}
        />
      </body>
    </html>
  );
}
