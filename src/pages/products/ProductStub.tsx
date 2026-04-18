import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";

type ProductStubProps = {
  tag: string;
  title: string;
  subtitle: string;
};

export default function ProductStub({ tag, title, subtitle }: ProductStubProps) {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 border-b border-[hsl(var(--border))]">
        <div className="container-wide">
          <div className="max-w-[60ch]">
            <p className="eyebrow mb-6">{tag}</p>
            <h1 className="text-display font-semibold text-foreground mb-6 leading-[1.04] tracking-[-0.03em]">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {subtitle}
            </p>

            <div className="border-t border-[hsl(var(--border))] pt-6 mb-10">
              <p className="eyebrow-muted mb-2">Status</p>
              <p className="text-muted-foreground text-[15px]">
                Coming soon — full page in progress.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/book-demo">
                <button className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-6 py-3 text-[15px] font-semibold rounded-[6px] hover:brightness-110 transition-all duration-200 flex items-center gap-2">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link to="/">
                <button className="border border-[hsl(var(--border))] text-foreground px-6 py-3 text-[15px] font-medium rounded-[6px] hover:border-[hsl(var(--accent))/40] transition-all duration-200 flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
