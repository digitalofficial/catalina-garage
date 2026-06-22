import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});
const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const SITE = "https://catalinagarage.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Catalina Garage | Honest Auto Repair in Tucson, AZ",
  description:
    "Old-school service, modern diagnostics. Car and truck repair, maintenance, and inspections for Tucson, the Foothills, Oro Valley, and beyond. Family-owned since day one.",
  openGraph: {
    title: "Catalina Garage — Tucson, AZ",
    description: "Honest auto repair with throwback charm. Cars, trucks, SUVs — if it rolls, we fix it.",
    url: SITE,
    siteName: "Catalina Garage",
    type: "website",
  },
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
