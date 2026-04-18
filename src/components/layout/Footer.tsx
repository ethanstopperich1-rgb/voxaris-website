import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import voxarisLogo from "@/assets/logo.png";

const footerLinks = {
  products: [
    { name: "AEO Services", href: "/products/aeo" },
    { name: "Talking Postcard", href: "/products/talking-postcard" },
    { name: "AI Website Builds", href: "/products/websites" },
    { name: "Staffing Agent", href: "/products/staffing" },
  ],
  company: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Why Voxaris", href: "/why-voxaris" },
    { name: "Book a Demo", href: "/book-demo" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-[hsl(var(--border))]">
      <div className="container-wide py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <Link to="/" className="inline-flex items-center mb-5 text-foreground" aria-label="Voxaris AI">
              <img
                src={voxarisLogo}
                alt="Voxaris AI — Personalizing Your Outreach"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 max-w-[42ch]">
              AI voice, video, staffing, and AEO infrastructure that handles leads, books appointments, and makes your business visible to AI.
            </p>
            <a
              href="https://audit.voxaris.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[hsl(var(--accent))] hover:opacity-80 transition"
            >
              Free AI Visibility Audit <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h4 className="eyebrow-muted mb-5">Products</h4>
              <ul className="space-y-3.5">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eyebrow-muted mb-5">Company</h4>
              <ul className="space-y-3.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[14px] text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[hsl(var(--border))]">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-muted-foreground">
              © {new Date().getFullYear()} Voxaris. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                to="/privacy"
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
