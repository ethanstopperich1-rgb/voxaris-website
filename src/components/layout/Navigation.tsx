import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import voxarisLogo from "@/assets/logo.png";
import NavHeader from "@/components/blocks/nav-header";
import { GooeyFilter } from "@/components/ui/gooey-filter";

const mobileQuickNav = [
  { label: "Home", href: "/", external: false },
  { label: "How It Works", href: "/how-it-works", external: false },
  { label: "AEO", href: "/products/aeo", external: false },
  { label: "Free Audit", href: "https://audit.voxaris.io", external: true },
  { label: "Book Demo", href: "/book-demo", external: false },
];

type NavChild = { name: string; href: string; desc?: string };
type NavLink = { name: string; href?: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { name: "How It Works", href: "/how-it-works" },
  {
    name: "Products",
    children: [
      { name: "AEO Services", href: "/products/aeo", desc: "Get cited by ChatGPT, Perplexity & Claude" },
      { name: "Talking Postcard", href: "/products/talking-postcard", desc: "AI video outreach at scale" },
      { name: "AI Website Builds", href: "/products/websites", desc: "AEO-ready sites built in 72 hours" },
      { name: "Staffing Agent", href: "/products/staffing", desc: "AI video screening before your team gets involved" },
    ],
  },
  { name: "Book a Demo", href: "/book-demo" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`absolute inset-0 transition-colors duration-200 lg:bg-transparent lg:backdrop-blur-none ${
          mobileOpen
            ? "bg-background/95 backdrop-blur-xl"
            : "bg-background/80 backdrop-blur-md"
        }`}
      />
      <nav className="container-wide relative">
        <div className="flex items-center justify-between h-[96px] lg:h-[112px]">
          {/* Brand */}
          <Link to="/" className="flex items-center text-foreground" aria-label="Voxaris AI">
            <img
              src={voxarisLogo}
              alt="Voxaris AI — Personalizing Your Outreach"
              className="h-20 lg:h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation — 21st.dev pill */}
          <div className="hidden lg:block">
            <NavHeader />
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://audit.voxaris.io" target="_blank" rel="noopener noreferrer">
              <button
                style={{
                  color: "hsl(28 8% 72%)",
                  fontSize: 13,
                  fontWeight: 500,
                  height: 36,
                  padding: "0 16px",
                  border: "1px solid hsl(28 8% 72% / 0.25)",
                  borderRadius: 6,
                  background: "transparent",
                  cursor: "pointer",
                  transition: "background-color 150ms, border-color 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "hsl(28 8% 72% / 0.08)";
                  e.currentTarget.style.borderColor = "hsl(28 8% 72% / 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "hsl(28 8% 72% / 0.25)";
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

          {/* Mobile Gooey Menu */}
          <div className="lg:hidden relative">
            <GooeyFilter id="vx-gooey-mobile" strength={6} />

            <div
              className="relative"
              style={{ filter: "url(#vx-gooey-mobile)" }}
            >
              {/* Expanding icon buttons */}
              <AnimatePresence>
                {mobileOpen &&
                  mobileQuickNav.map((item, index) => {
                    const isCta = item.label === "Book Demo" || item.label === "Free Audit";
                    const ButtonInner = (
                      <motion.div
                        className={`w-12 h-12 rounded-full shadow-lg ${
                          isCta
                            ? "bg-[hsl(var(--accent))]"
                            : "bg-white"
                        }`}
                      />
                    );
                    return (
                      <motion.div
                        key={item.label}
                        className="absolute right-0"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: (index + 1) * 56, opacity: 1 }}
                        exit={{
                          y: 0,
                          opacity: 0,
                          transition: {
                            delay: (mobileQuickNav.length - index) * 0.04,
                            duration: 0.35,
                            type: "spring",
                            bounce: 0,
                          },
                        }}
                        transition={{
                          delay: index * 0.05,
                          duration: 0.4,
                          type: "spring",
                          bounce: 0,
                        }}
                      >
                        {item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            aria-label={item.label}
                          >
                            {ButtonInner}
                          </a>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={() => setMobileOpen(false)}
                            aria-label={item.label}
                          >
                            {ButtonInner}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
              </AnimatePresence>

              {/* Main toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                className="relative w-12 h-12 rounded-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] flex items-center justify-center shadow-lg"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" strokeWidth={2.5} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" strokeWidth={2.5} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Labels (outside gooey so they don't blob) */}
            <AnimatePresence>
              {mobileOpen &&
                mobileQuickNav.map((item, index) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0, y: (index + 1) * 56 + 14 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.25 }}
                    className="absolute right-[60px] top-0 text-[12px] font-medium text-foreground whitespace-nowrap pointer-events-none bg-background/80 backdrop-blur-sm px-2 py-1 rounded"
                  >
                    {item.label}
                  </motion.span>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}
