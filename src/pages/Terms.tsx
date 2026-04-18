import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container-wide">
          <div className="max-w-[70ch]">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-4xl lg:text-display-sm font-semibold text-foreground mb-10 leading-[1.05]">
              Terms of Service
            </h1>

            <p className="text-muted-foreground text-[15px] mb-10">
              Last updated: April 2026
            </p>

            <div className="space-y-10 text-[15px] text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Agreement</h2>
                <p>
                  By accessing voxaris.io or engaging Voxaris for any service, you agree to these terms. If you do not agree, do not use the site or our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Services</h2>
                <p>
                  Voxaris offers AEO (Answer Engine Optimization), AI-ready website builds, Talking Postcard campaigns, and related AI marketing infrastructure. Scope, deliverables, timelines, and fees for any engagement are defined in a separate order form or statement of work.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Payment</h2>
                <p>
                  Fees are payable as specified in your order form. Recurring services are billed in advance. Late payments may incur interest at the lesser of 1.5%/month or the maximum rate permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Client responsibilities</h2>
                <ul className="space-y-2 list-none pl-0">
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Provide accurate business information and timely feedback on deliverables</li>
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Hold all necessary rights to any content you supply to Voxaris</li>
                  <li className="border-l-2 border-[hsl(var(--border))] pl-3 py-1">Comply with applicable laws when using our deliverables (CAN-SPAM, TCPA, GDPR, etc.)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual property</h2>
                <p>
                  Upon full payment, you receive a perpetual license to use deliverables produced for you. Voxaris retains ownership of underlying frameworks, templates, proprietary tools, and AI-generation pipelines. Voxaris may use anonymized metrics and redacted case-study material for marketing unless you opt out in writing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Acceptable use</h2>
                <p>
                  You agree not to use Voxaris services to send unlawful, deceptive, or harassing communications; to violate CAN-SPAM, TCPA, GDPR, or any comparable law; to impersonate any person; or to distribute malware or other harmful code.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Warranties & disclaimers</h2>
                <p>
                  Voxaris services are provided "as is". While we work diligently to deliver results — and offer specific guarantees where stated in your order form — we do not warrant any particular ranking, citation frequency, lead volume, or revenue outcome. AI answer engines are third-party platforms outside our control.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of liability</h2>
                <p>
                  To the fullest extent permitted by law, Voxaris's aggregate liability for any claim arising out of these terms is limited to the fees you paid in the three months preceding the claim. Voxaris is not liable for indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Termination</h2>
                <p>
                  Either party may terminate an engagement per the notice terms in the applicable order form. Fees accrued prior to termination remain due. Sections on IP, limitation of liability, and governing law survive termination.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Governing law</h2>
                <p>
                  These terms are governed by the laws of the State of Florida, USA, without regard to conflict of laws. Any dispute will be resolved exclusively in the state or federal courts located in Orange County, Florida.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
                <p>
                  Questions about these terms: use the <a href="/book-demo" className="text-[hsl(var(--accent))] hover:opacity-80">contact form</a>. Voxaris, Orlando, FL, USA.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
