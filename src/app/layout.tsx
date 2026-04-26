import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Córdova Studio — Interior Architecture & Design",
  description:
    "Timeless interior design rooted in natural aesthetics. Space planning, design consultations, and full home design in the San Francisco Bay Area.",
  keywords: [
    "interior design",
    "interior architecture",
    "Bay Area",
    "Walnut Creek",
    "San Francisco",
    "space planning",
    "The Córdova Studio",
    "Omar Córdova García",
  ],
  openGraph: {
    title: "The Córdova Studio — Interior Architecture & Design",
    description:
      "Timeless interior design rooted in natural aesthetics.",
    url: "https://thecordovastudio.com",
    siteName: "The Córdova Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4W4V7SRB3W"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4W4V7SRB3W');
          `}
        </Script>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
