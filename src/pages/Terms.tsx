import Layout from "@/components/layout/Layout";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Terms() {
  usePageMeta({
    title: "Terms of Service | Voxaris",
    description:
      "Voxaris terms of service for voxaris.io, audit.voxaris.io, and Voxaris AI products including AEO, websites, and Talking Postcard.",
    canonical: "https://voxaris.io/terms",
  });
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
              Last updated: <time dateTime="2026-04-22">April 22, 2026</time>
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

              <section id="sms-terms">
                <h2 className="text-xl font-semibold text-foreground mb-3">SMS messaging program terms</h2>
                <p className="mb-3">
                  <strong className="text-foreground">Program name:</strong> Voxaris AI Visibility Audit Notifications.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">Program description:</strong> Voxaris sends transactional SMS notifications to users who request a free AI Visibility Audit at <a href="https://audit.voxaris.io" className="text-[hsl(var(--accent))] hover:opacity-80">audit.voxaris.io</a> or via Facebook Lead Ads. Messages include audit confirmation, a link to the completed report, and scheduling reminders for any follow-up call you book.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">How to opt in:</strong> Opt-in occurs only when you voluntarily complete and submit our audit request form (providing name, email, phone number, and website) and check the SMS consent box. By submitting the form, you explicitly consent to receive 1–4 follow-up SMS messages related to your free AI Visibility Audit. No SMS messages are sent without this explicit form submission.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">Message frequency:</strong> Up to 4 messages per audit request. We do not send recurring marketing or promotional broadcasts.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">Message and data rates:</strong> Standard message and data rates from your wireless carrier may apply. Voxaris does not charge a fee for the messages.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">How to opt out:</strong> Reply <strong className="text-foreground">STOP</strong> to any message at any time to be immediately unsubscribed from all further SMS communications.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">How to get help:</strong> Reply <strong className="text-foreground">HELP</strong> to any message for support information, or contact us using the form below. You can also email <a href="mailto:support@voxaris.io" className="text-[hsl(var(--accent))] hover:opacity-80">support@voxaris.io</a>.
                </p>
                <p className="mb-3">
                  <strong className="text-foreground">Carriers:</strong> Carriers (including AT&amp;T, Verizon, T-Mobile, and others) are not liable for delayed or undelivered messages.
                </p>
                <p>
                  <strong className="text-foreground">Privacy:</strong> Phone numbers collected for SMS purposes are never shared with third parties or used for third-party marketing. See our <a href="/privacy" className="text-[hsl(var(--accent))] hover:opacity-80">Privacy Policy</a> for full details on how we handle your information.
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
