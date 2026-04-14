import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cordova Studio — Interior Architecture & Design",
  description:
    "Timeless interior design rooted in natural aesthetics. Space planning, design consultations, and full home design in the San Francisco Bay Area.",
  keywords: [
    "interior design",
    "interior architecture",
    "Bay Area",
    "Walnut Creek",
    "San Francisco",
    "space planning",
    "Cordova Studio",
    "Omar Córdova García",
  ],
  openGraph: {
    title: "Cordova Studio — Interior Architecture & Design",
    description:
      "Timeless interior design rooted in natural aesthetics.",
    url: "https://cordova.studio",
    siteName: "Cordova Studio",
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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
