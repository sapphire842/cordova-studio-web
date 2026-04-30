import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://thecordovastudio.com"),
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
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "The Córdova Studio interior architecture and design",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "256x256" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4W4V7SRB3W"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4W4V7SRB3W');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
