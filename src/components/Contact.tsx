"use client";

import { useReveal } from "@/lib/utils";
import { useState } from "react";

const contactEmail = "omar@thecordovastudio.com";

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-warm-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2">
          <div ref={ref} className="fade-in">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              Let&apos;s Create
              <br />
              Together
            </h2>
            <p className="mt-6 text-sm font-light leading-relaxed text-charcoal/70">
              Whether you&apos;re reimagining a single room or designing from
              the ground up, every project starts with a conversation.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <a
                href={`mailto:${contactEmail}`}
                className="block font-light text-charcoal transition-colors hover:text-accent"
              >
                {contactEmail}
              </a>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/thecordovastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light uppercase tracking-widest text-muted transition-colors hover:text-accent"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-cordova-garcia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-light uppercase tracking-widest text-muted transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
              <p className="text-xs tracking-wide text-muted">
                Walnut Creek, CA · Serving the San Francisco Bay Area
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-xl text-charcoal">
                    Thank you — your email draft is ready.
                  </p>
                  <p className="mt-3 text-sm font-light leading-relaxed text-charcoal/60">
                    Please send it from your email app to complete your inquiry.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = String(formData.get("name") ?? "").trim();
                  const email = String(formData.get("email") ?? "").trim();
                  const message = String(formData.get("message") ?? "").trim();
                  const subject = `New project inquiry from ${name}`;
                  const body = [
                    `Name: ${name}`,
                    `Email: ${email}`,
                    "",
                    "Project details:",
                    message,
                  ].join("\n");

                  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`;
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-widest text-muted"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full resize-none border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 border border-charcoal px-10 py-3 text-xs uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-warm-white"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
