"use client";

import type {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  InvalidEvent,
} from "react";
import { useState } from "react";
import { useReveal } from "@/lib/utils";

const contactEmail = "omar@thecordovastudio.com";
const formSubmitUrl = `https://formsubmit.co/${contactEmail}`;
const formSubmitAjaxUrl = `https://formsubmit.co/ajax/${contactEmail}`;
const requiredMessage = "Please enter your response.";
const maxTotalUploadSize = 10 * 1024 * 1024;
const fileLimitMessage = "Please upload up to five files totaling 10 MB or less.";
const maxAttachmentCount = 5;

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

function formatFileSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(bytes > 0 ? 1 : 0)} MB`;
}

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const parts = [
    digits.slice(0, 3),
    digits.slice(3, 6),
    digits.slice(6, 10),
  ].filter(Boolean);

  return parts.join(".");
}

export default function Contact() {
  const ref = useReveal();
  const [customerEmail, setCustomerEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendCopy, setSendCopy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [visibleAttachmentFields, setVisibleAttachmentFields] = useState([1]);
  const [selectedAttachments, setSelectedAttachments] = useState<
    Record<number, { name: string; size: number }>
  >({});
  const totalUploadSize = Object.values(selectedAttachments).reduce(
    (total, file) => total + file.size,
    0
  );
  const isUploadSizeValid = totalUploadSize <= maxTotalUploadSize;

  const validateUploads = (form: HTMLFormElement) => {
    const uploadInputs = Array.from(
      form.querySelectorAll<HTMLInputElement>("[data-file-upload]")
    );
    const totalSize = uploadInputs.reduce((total, input) => {
      const file = input.files?.[0];
      return total + (file?.size ?? 0);
    }, 0);
    const isValid = totalSize <= maxTotalUploadSize;

    uploadInputs.forEach((input) => {
      input.setCustomValidity(isValid ? "" : fileLimitMessage);
    });

    return { isValid, uploadInputs };
  };

  const handleFileChange =
    (fieldNumber: number) => (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.currentTarget;
      const file = input.files?.[0];

      setSelectedAttachments((current) => {
        if (!file) {
          const next = { ...current };
          delete next[fieldNumber];
          return next;
        }

        return { ...current, [fieldNumber]: { name: file.name, size: file.size } };
      });
      validateUploads(input.form as HTMLFormElement);
    };

  const clearAttachment = (fieldNumber: number) => {
    const input = document.querySelector<HTMLInputElement>(
      `[data-file-upload="${fieldNumber}"]`
    );

    if (!input) return;

    input.value = "";
    setSelectedAttachments((current) => {
      const next = { ...current };
      delete next[fieldNumber];
      return next;
    });
    setVisibleAttachmentFields((current) => {
      if (current.length === 1) return current;
      return current.filter((visibleField) => visibleField !== fieldNumber);
    });
    validateUploads(input.form as HTMLFormElement);
  };

  const addAttachmentSlot = () => {
    setVisibleAttachmentFields((current) => {
      const nextField = Array.from(
        { length: maxAttachmentCount },
        (_, index) => index + 1
      ).find((fieldNumber) => !current.includes(fieldNumber));

      return nextField ? [...current, nextField] : current;
    });
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.currentTarget.setCustomValidity("");
    setPhoneNumber(formatPhoneNumber(event.currentTarget.value));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const { isValid, uploadInputs } = validateUploads(form);

    if (!isValid) {
      uploadInputs.find((input) => input.files?.[0])?.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(formSubmitAjaxUrl, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed.");
      }

      window.location.href = "/thank-you";
    } catch {
      setIsSubmitting(false);
      setSubmitError(
        "Something went wrong while sending your message. Please try again."
      );
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
              action={formSubmitUrl}
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
              <input type="hidden" name="_cc" value={sendCopy ? customerEmail : ""} />
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
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
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
                    value={customerEmail}
                    onChange={(event) =>
                      setCustomerEmail(event.currentTarget.value)
                    }
                    onInvalid={handleInvalid}
                    onInput={clearValidation}
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal outline-none transition-colors focus:border-accent"
                  />
                </div>
                <label className="flex items-center gap-3 pb-3 text-sm font-light leading-relaxed text-charcoal/70 md:whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={sendCopy}
                    onChange={(event) => setSendCopy(event.currentTarget.checked)}
                    className="h-4 w-4 accent-charcoal"
                  />
                  <span>Send me a copy</span>
                </label>
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
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  onInvalid={handleInvalid}
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
              <div className="space-y-3">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-muted">
                    Upload up to five inspiration images, plans, or PDFs
                  </p>
                  <p className="text-xs font-light leading-relaxed text-charcoal/60">
                    PNG, JPG, JPEG, or PDF. Maximum 10 MB total.
                  </p>
                  <p
                    className={`mt-2 text-xs font-light leading-relaxed ${
                      isUploadSizeValid
                        ? "text-charcoal/60"
                        : "animate-pulse font-semibold text-red-700"
                    }`}
                    aria-live="polite"
                  >
                    {formatFileSize(totalUploadSize)} of{" "}
                    {formatFileSize(maxTotalUploadSize)} selected
                  </p>
                </div>
                {visibleAttachmentFields.map((fieldNumber) => (
                  <div key={fieldNumber}>
                    <input
                      aria-label={`Attachment ${fieldNumber}`}
                      name={`attachment_${fieldNumber}`}
                      type="file"
                      accept=".png,.jpg,.jpeg,.pdf,image/png,image/jpeg,application/pdf"
                      data-file-upload={fieldNumber}
                      onChange={handleFileChange(fieldNumber)}
                      className="w-full cursor-pointer border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal file:mr-5 file:border-0 file:bg-charcoal file:px-5 file:py-2 file:text-xs file:uppercase file:tracking-[0.2em] file:text-warm-white file:transition-colors hover:file:bg-accent focus:outline-none"
                    />
                    {selectedAttachments[fieldNumber] ? (
                      <button
                        type="button"
                        onClick={() => clearAttachment(fieldNumber)}
                        className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-accent"
                      >
                        Remove {selectedAttachments[fieldNumber].name}
                      </button>
                    ) : null}
                  </div>
                ))}
                {visibleAttachmentFields.length < maxAttachmentCount ? (
                  <button
                    type="button"
                    onClick={addAttachmentSlot}
                    className="text-[10px] uppercase tracking-[0.25em] text-charcoal transition-colors hover:text-accent"
                  >
                    + Add more
                  </button>
                ) : null}
              </div>
              {submitError ? (
                <p className="text-sm font-semibold leading-relaxed text-red-700">
                  {submitError}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 border border-charcoal px-10 py-3 text-xs uppercase tracking-[0.25em] text-charcoal transition-all hover:bg-charcoal hover:text-warm-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
