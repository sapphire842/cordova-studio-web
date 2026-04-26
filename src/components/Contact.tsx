"use client";

import type {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  InvalidEvent,
} from "react";
import { useReveal } from "@/lib/utils";

const contactEmail = "omar@thecordovastudio.com";
const requiredMessage = "Please enter your response.";
const fileLimitMessage = "Please upload up to five files.";

function handleInvalid(
  event: InvalidEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) {
  event.currentTarget.setCustomValidity(requiredMessage);
}

function clearValidation(
  event: FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) {
  event.currentTarget.setCustomValidity("");
}

export default function Contact() {
  const ref = useReveal();
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    input.setCustomValidity("");

    if (input.files && input.files.length > 5) {
      input.setCustomValidity(fileLimitMessage);
      input.reportValidity();
      input.value = "";
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    const attachment = event.currentTarget.elements.namedItem("attachment[]");

    if (
      attachment instanceof HTMLInputElement &&
      attachment.files &&
      attachment.files.length > 5
    ) {
      event.preventDefault();
      attachment.setCustomValidity(fileLimitMessage);
      attachment.reportValidity();
    }
  };

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
            <form
              action={`https://formsubmit.co/${contactEmail}`}
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="_subject"
                value="New project inquiry from The Cordova Studio website"
              />
              <input
                type="hidden"
                name="_next"
                value="https://thecordovastudio.com/thank-you"
              />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
              />
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
                  onInvalid={handleInvalid}
                  onInput={clearValidation}
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
                  autoComplete="email"
                  required
                  onInvalid={handleInvalid}
                  onInput={clearValidation}
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  onInvalid={handleInvalid}
                  onInput={clearValidation}
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="project-location"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Project location
                </label>
                <input
                  id="project-location"
                  name="project_location"
                  type="text"
                  autoComplete="street-address"
                  required
                  onInvalid={handleInvalid}
                  onInput={clearValidation}
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Service interested in
                </label>
                <select
                  id="service"
                  name="service_interested_in"
                  required
                  defaultValue=""
                  onInvalid={handleInvalid}
                  onInput={clearValidation}
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Design Consultation">Design Consultation</option>
                  <option value="Furnishing & Styling">
                    Furnishing & Styling
                  </option>
                  <option value="Space Planning">Space Planning</option>
                  <option value="Renovations">Renovations</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="timeline"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Timeline
                </label>
                <input
                  id="timeline"
                  name="timeline"
                  type="text"
                  className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="estimated-budget"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Estimated budget
                </label>
                <input
                  id="estimated-budget"
                  name="estimated_budget"
                  type="text"
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
                  onInvalid={handleInvalid}
                  onInput={clearValidation}
                  className="w-full resize-none border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                />
              </div>
              <div>
                <label
                  htmlFor="attachment"
                  className="mb-2 block text-xs uppercase tracking-widest text-muted"
                >
                  Upload up to five inspiration images, plans, or PDFs
                </label>
                <input
                  id="attachment"
                  name="attachment[]"
                  type="file"
                  accept=".png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf"
                  multiple
                  onChange={handleFileChange}
                  className="w-full cursor-pointer border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal file:mr-5 file:border-0 file:bg-charcoal file:px-5 file:py-2 file:text-xs file:uppercase file:tracking-[0.2em] file:text-warm-white file:transition-colors hover:file:bg-accent focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-4 border border-charcoal px-10 py-3 text-xs uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-warm-white"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
