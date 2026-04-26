import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — The Córdova Studio",
  description: "Thank you for contacting The Córdova Studio.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center bg-warm-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Message Sent
        </p>
        <h1 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl">
          Thank you for reaching out.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-charcoal/70">
          Your project inquiry has been sent to The Córdova Studio. We&apos;ll
          review your message and follow up soon.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block border border-charcoal px-10 py-3 text-xs uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-warm-white"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
