import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import voxarisLogo from "@/assets/logo.png";

type NavChild = { name: string; href: string; desc?: string };
type NavLink = { name: string; href?: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { name: "How It Works", href: "/how-it-works" },
  {
    name: "Products & Solutions",
    children: [
      { name: "AEO Services", href: "/products/aeo", desc: "Get cited by ChatGPT & Perplexity" },
      { name: "AI Website Builds", href: "/products/websites", desc: "AEO-ready sites in 72 hours" },
      { name: "Talking Postcard", href: "/products/talking-postcard", desc: "AI video outreach at scale" },
      { name: "Marketing Agencies", href: "/solutions/agencies", desc: "White-label + resell infrastructure" },
      { name: "Car Dealerships", href: "/solutions/dealerships", desc: "Lead response + appointment booking" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[hsl(var(--border))]" />

      <nav className="container-wide relative">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand */}
          <Link to="/" className="flex items-center text-foreground" aria-label="Voxaris AI">
            <img
              src={voxarisLogo}
              alt="Voxaris AI — Personalizing Your Outreach"
              className="h-8 lg:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button className="flex items-center gap-1.5 px-4 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link.name}
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform duration-200"
                        style={{ transform: openMenu === link.name ? "rotate(180deg)" : "rotate(0)" }}
                      />
                    </button>
                    <AnimatePresence>
                      {openMenu === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-3"
                        >
                          <div className="bg-card/95 backdrop-blur-xl border border-[hsl(var(--border))] rounded-[6px] p-2 min-w-[320px]">
                            {link.children.map((child) => (
                              <Link
                                key={child.name}
                                to={child.href}
                                className="block px-4 py-3 rounded-[4px] hover:bg-secondary/60 transition-colors duration-150 group"
                              >
                                <div className="text-[13px] font-medium text-foreground group-hover:text-[hsl(var(--accent))] transition-colors">
                                  {child.name}
                                </div>
                                {child.desc && (
                                  <div className="text-[12px] text-muted-foreground mt-0.5">
                                    {child.desc}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href!}
                    className={`px-4 py-2 text-[13px] transition-colors duration-200 ${
                      location.pathname === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  color: "hsl(72 100% 64%)",
                  fontSize: 13,
                  fontWeight: 500,
                  height: 36,
                  padding: "0 16px",
                  border: "1px solid hsl(72 100% 64% / 0.25)",
                  borderRadius: 6,
                  background: "transparent",
                  cursor: "pointer",
                  transition: "background-color 150ms, border-color 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(72 100% 64% / 0.08)";
                  e.currentTarget.style.borderColor = "hsl(72 100% 64% / 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "hsl(72 100% 64% / 0.25)";
                }}
              >
                Free AI Audit
              </button>
            </a>
            <Link to="/book-demo">
              <button className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-5 h-9 rounded-[6px] font-medium text-[13px] hover:brightness-110 transition-all duration-200">
                Book a Demo
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-secondary/60 rounded-[4px] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-[hsl(var(--border))]"
          >
            <div className="container-wide py-6 space-y-5">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.children ? (
                    <div className="space-y-2">
                      <p className="eyebrow-muted mb-2">{link.name}</p>
                      <div className="pl-0 space-y-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block text-[14px] text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.href!}
                      className="block text-[14px] font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t border-[hsl(var(--border))]">
                <a
                  href="https://audit.voxaris.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <button className="w-full border border-[hsl(var(--accent))/30] text-[hsl(var(--accent))] text-[13px] font-medium px-4 h-10 rounded-[6px]">
                    Free AI Audit →
                  </button>
                </a>
                <Link to="/book-demo" onClick={() => setMobileOpen(false)}>
                  <button className="w-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] text-[13px] font-medium px-4 h-10 rounded-[6px]">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
