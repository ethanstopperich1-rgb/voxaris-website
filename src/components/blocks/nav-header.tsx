"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Voxaris", href: "/why-voxaris" },
  { label: "AEO", href: "/products/aeo" },
  { label: "Book a Demo", href: "/book-demo" },
];

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const location = useLocation();

  useEffect(() => {
    setPosition((pv) => ({ ...pv, opacity: 0 }));
  }, [location.pathname]);

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navItems.map((item) => (
        <Tab
          key={item.href}
          href={item.href}
          active={location.pathname === item.href}
          setPosition={setPosition}
        >
          {item.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

interface TabProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}

const Tab = ({ children, href, active, setPosition }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block"
    >
      <Link
        to={href}
        className={`block cursor-pointer rounded-full px-3 py-1.5 text-xs uppercase tracking-wider md:px-5 md:py-2.5 md:text-[13px] transition-colors outline-none focus:outline-none focus-visible:outline-none select-none ${
          active ? "text-white font-semibold" : "text-white/75 hover:text-white"
        }`}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {children}
      </Link>
    </li>
  );
};

interface CursorProps {
  position: { left: number; width: number; opacity: number };
}

const Cursor = ({ position }: CursorProps) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className="absolute z-0 h-7 rounded-full bg-white/10 border border-white/25 md:h-10"
    />
  );
};

export default NavHeader;
