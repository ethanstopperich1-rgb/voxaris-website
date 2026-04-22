import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy | Voxaris",
    description:
      "Voxaris privacy policy. How we collect, use, and protect visitor and customer data across voxaris.io and audit.voxaris.io.",
    canonical: "https://voxaris.io/privacy",
  });
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container-wide">
          <div className="max-w-[70ch]">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-4xl lg:text-display-sm font-semibold text-foreground mb-10 leading-[1.05]">
              Privacy Policy
            </h1>

            <p className="text-muted-foreground text-[15px] mb-10">
              Last updated: April 2026
            </p>

            <div className="space-y-10 text-[15px] text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Who we are</h2>
                <p>
                  Voxaris ("we", "us") operates <a href="https://voxaris.io" className="text-[hsl(var(--accent))] hover:opacity-80">voxaris.io</a> and provides AI marketing services including AEO (Answer Engine Optimization), AI-ready website builds, and AI-personalized video outreach (Talking Postcard). Voxaris is based in Orlando, Florida, USA.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information we collect</h2>
                <p className="mb-3">
                  We collect information you provide directly, including:
                </p>
                <ul className="space-y-2 ml-0 pl-0 list-none">
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Contact details you submit through our demo booking, audit request, or contact forms (name, email, phone, business name)</li>
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Business information relevant to the services you request (website URL, service category, location)</li>
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Communications you have with us (email, SMS, call notes)</li>
                </ul>
                <p className="mt-3">
                  We also collect standard usage data (pages visited, device type, approximate location) via privacy-respecting analytics.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">How we use information</h2>
                <ul className="space-y-2 list-none pl-0">
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Deliver the products and services you request</li>
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Respond to inquiries and schedule demos</li>
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Send service-related communications (audit reports, project updates, follow-ups)</li>
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Improve our services and measure their effectiveness</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Sharing</h2>
                <p>
                  We do not sell your personal information. We share information only with service providers who help us operate the business (hosting, email, CRM, scheduling, analytics) under confidentiality terms, and where required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Your rights</h2>
                <p>
                  You can request access, correction, or deletion of your personal information at any time. Florida and US residents have rights under applicable state law. EU/UK residents have rights under GDPR/UK GDPR. Contact us at the address below to exercise any of these rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Cookies</h2>
                <p>
                  We use a minimal set of first-party cookies for core site functionality and privacy-respecting analytics. We do not use ad retargeting or third-party advertising cookies. You can disable cookies in your browser; parts of the site may be less functional as a result.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Children</h2>
                <p>
                  Our services are not directed to children under 16 and we do not knowingly collect information from them.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Changes</h2>
                <p>
                  We may update this policy. When we do, we will update the "Last updated" date above. Material changes will be announced on this page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
                <p>
                  Questions or requests: email us via the <a href="/book-demo" className="text-[hsl(var(--accent))] hover:opacity-80">contact form</a>. Voxaris, Orlando, FL, USA.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
