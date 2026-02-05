import { Link } from "react-router-dom";
import voxarisMark from "@/assets/voxaris-mark.png";

const footerLinks = {
  product: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Why Voxaris", href: "/why-voxaris" },
    { name: "Pricing", href: "/pricing" },
    { name: "Demo", href: "/demo" },
  ],
  solutions: [
    { name: "Marketing Agencies", href: "/solutions/agencies" },
    { name: "Car Dealerships", href: "/solutions/dealerships" },
  ],
  company: [
    { name: "Book a Demo", href: "/book-demo" },
    { name: "Contact", href: "/book-demo" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-20 lg:py-24">
        {/* Top Section with Logo */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16 mb-16">
          {/* Brand - Prominent */}
          <div className="lg:max-w-sm">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-5 text-background">
              <img
                src={voxarisMark}
                alt="Voxaris"
                className="h-7 w-7 object-contain opacity-90 brightness-0 invert"
              />
              <span className="font-semibold text-[13px] tracking-[0.28em] uppercase text-background">
                VOXARIS
              </span>
              <sup className="text-[9px] opacity-70 -translate-y-1">TM</sup>
            </Link>
            <p className="text-background/60 text-[15px] leading-relaxed">
              AI sales infrastructure that converts inbound leads into booked appointments — automatically.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-16">
            {/* Product */}
            <div>
              <h4 className="font-semibold mb-5 text-[13px] tracking-wide uppercase text-background/40">
                Product
              </h4>
              <ul className="space-y-3.5">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-background/60 hover:text-background transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold mb-5 text-[13px] tracking-wide uppercase text-background/40">
                Solutions
              </h4>
              <ul className="space-y-3.5">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-background/60 hover:text-background transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-5 text-[13px] tracking-wide uppercase text-background/40">
                Company
              </h4>
              <ul className="space-y-3.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[15px] text-background/60 hover:text-background transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom - Clean separator */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[13px] text-background/40">
              © {new Date().getFullYear()} Voxaris. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link
                to="/privacy"
                className="text-[13px] text-background/40 hover:text-background/70 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-[13px] text-background/40 hover:text-background/70 transition-colors duration-200"
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
