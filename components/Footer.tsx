"use client";

const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] bg-[#0A0A0A] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <a
            href="#home"
            className="text-[#F7F7F5] text-2xl tracking-[0.2em]"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Zaia
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-6 md:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#B8B8B8] text-xs tracking-widest uppercase hover:text-[#F7F7F5] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2A2A2A] text-xs tracking-widest uppercase hover:text-[#F7F7F5] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[#2A2A2A] text-xs tracking-widest">
            © 2024 Zaia. All rights reserved.
          </p>
          <p className="text-[#2A2A2A] text-xs tracking-widest">
            Dubai, United Arab Emirates
          </p>
        </div>
      </div>
    </footer>
  );
}
