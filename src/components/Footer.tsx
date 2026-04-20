export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-warm-white px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted md:flex-row">
        <p>&copy; {year} Cordova Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/thecordovastudio"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest transition-colors hover:text-accent"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/omar-cordova-garcia/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="mailto:omar@thecordovastudio.com"
            className="uppercase tracking-widest transition-colors hover:text-accent"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
