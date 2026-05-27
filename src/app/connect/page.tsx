import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Córdova Studio | Connect",
  description:
    "Portfolio and contact information for Omar Córdova García, The Córdova Studio.",
  alternates: {
    canonical: "/connect",
  },
};

const links = [
  {
    label: "Save Omar to Contacts",
    href: "/Omar_Cordova_Garcia.vcf",
    primary: true,
    download: true,
  },
  {
    label: "View Website & Portfolio",
    href: "https://thecordovastudio.com",
  },
  {
    label: "Email Omar",
    href: "mailto:omar@thecordovastudio.com",
  },
  {
    label: "Call / Text",
    href: "tel:+12132476672",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/thecordovastudio",
  },
];

export default function ConnectPage() {
  return (
    <div className="flex min-h-[calc(100vh-84px)] items-center justify-center bg-[radial-gradient(circle_at_top,#fffaf2_0%,#f7f2ea_42%,#e8ddce_100%)] px-7 py-12 text-[#171411]">
      <section className="w-full max-w-[460px] overflow-hidden rounded-[30px] border border-[#c8aa72]/45 bg-white/80 shadow-[0_24px_70px_rgba(42,33,27,0.14)]">
        <div className="bg-[linear-gradient(160deg,#211a16,#3a2c22)] px-[30px] pb-[30px] pt-10 text-center text-[#fff7eb]">
          <div
            className="mx-auto mb-[22px] w-full max-w-[300px]"
            aria-label="The Córdova Studio logo"
          >
            <img
              src="/CordovaStudio-LOGO-light.png"
              alt="The Córdova Studio logo"
              className="mx-auto block h-auto w-full object-contain"
            />
            <div className="mx-auto mt-[18px] h-px w-[74px] bg-[#c8aa72]/80" />
          </div>
          <h1 className="font-serif text-[28px] font-normal leading-tight tracking-normal">
            Omar Córdova García
          </h1>
          <p className="mt-2.5 text-[11px] uppercase tracking-[0.14em] text-[#dcc79f]">
            Interior Architecture &amp; Design
          </p>
        </div>

        <div className="p-7">
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                download={link.download ? "Omar_Cordova_Garcia.vcf" : undefined}
                className={`block w-full rounded-full px-[18px] py-[15px] text-center font-semibold tracking-normal no-underline transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c8aa72] ${
                  link.primary
                    ? "bg-[#2a211b] text-[#fff7eb]"
                    : "border border-[#2a211b]/20 bg-[#fffaf4] text-[#2a211b]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-[22px] border-t border-[#eee4d6] pt-[18px] text-sm leading-[1.75] text-[#52463d]">
            <p className="font-semibold text-[#171411]">Omar Córdova García</p>
            <p>The Córdova Studio</p>
            <a className="block text-[#2a211b]" href="tel:+12132476672">
              213-247-6672
            </a>
            <a
              className="block text-[#2a211b]"
              href="mailto:omar@thecordovastudio.com"
            >
              omar@thecordovastudio.com
            </a>
          </div>
        </div>

        <footer className="px-7 pb-[26px] text-center text-[11px] uppercase tracking-[0.08em] text-[#8c7a68]">
          Portfolio + Contact
        </footer>
      </section>
    </div>
  );
}
