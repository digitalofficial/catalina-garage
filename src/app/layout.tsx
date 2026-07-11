import type { Metadata } from "next";
import { Anton, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});
const body = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
const marker = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-marker",
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
    <html lang="en" className={`${display.variable} ${body.variable} ${marker.variable}`}>
      <body className="font-sans bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
