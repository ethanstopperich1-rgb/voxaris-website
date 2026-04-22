import { ReactNode } from "react";
import Navigation from "./Navigation";
import AppBackground from "./AppBackground";
import { Footer } from "@/components/blocks/footer-section";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AppBackground />
      <Navigation />
      <main className="relative flex-1 pt-24 lg:pt-28">{children}</main>
      <Footer />
    </div>
  );
}
