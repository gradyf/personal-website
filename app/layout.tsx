import type { Metadata } from "next";
import { Archivo, Work_Sans, Red_Hat_Mono } from "next/font/google";
import { SITE } from "@/lib/content";
import { Ticker } from "@/components/Ticker";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-work-sans",
});

const redHatMono = Red_Hat_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-red-hat-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Gray Forrester — Projects, concepts & other evidence.",
    template: "%s — Gray Forrester",
  },
  description:
    "Agents that learn, controllers that settle, small tools for large rabbit holes. Built at school and after hours with Claude Code.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${workSans.variable} ${redHatMono.variable}`}
    >
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Ticker text={SITE.tickerText} />
          <div
            style={{
              width: "100%",
              maxWidth: "var(--page-max)",
              margin: "0 auto",
              padding: "0 var(--page-pad)",
              flex: 1,
            }}
          >
            <SiteHeader name={SITE.name} />
            <main>{children}</main>
          </div>
          <div
            style={{
              width: "100%",
              maxWidth: "var(--page-max)",
              margin: "0 auto",
              padding: "0 var(--page-pad)",
            }}
          >
            <SiteFooter left={SITE.footerLeft} right="DROP ME A LINE" />
            <div style={{ height: 10 }} />
          </div>
        </div>
      </body>
    </html>
  );
}
