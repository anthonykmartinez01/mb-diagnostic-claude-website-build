import { SITE } from "@/lib/siteData";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | MB Diagnostic Labs"
        description="Read the MB Diagnostic Labs privacy policy. Learn how we collect, use, and protect your personal information."
        canonical="https://mbdiagnostic.com/privacy"
      />
      <Header />
      <main className="pt-32 pb-16">
        <div className="container-site max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: March 29, 2026
          </p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Introduction
              </h2>
              <p className="mt-3">
                {SITE.name} ("we," "us," or "our") respects your privacy and is committed to
                protecting the personal information you share with us. This Privacy Policy explains
                how we collect, use, and safeguard your information when you visit our website at{" "}
                <a href={SITE.url} className="text-secondary underline">
                  {SITE.url}
                </a>{" "}
                or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Information We Collect
              </h2>
              <p className="mt-3">We may collect the following types of information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Contact Information:</strong> Name, phone
                  number, email address, and mailing address when you contact us, schedule a test,
                  or submit a form on our website.
                </li>
                <li>
                  <strong className="text-foreground">Service Information:</strong> Details related
                  to the DNA testing services you request, including test type and scheduling
                  preferences.
                </li>
                <li>
                  <strong className="text-foreground">Website Usage Data:</strong> Information
                  automatically collected when you visit our site, such as your IP address, browser
                  type, pages visited, and time spent on the site.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                How We Use Your Information
              </h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Provide and manage the DNA testing services you request</li>
                <li>Communicate with you about your appointments, results, and inquiries</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Respond to your questions and provide customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                How We Protect Your Information
              </h2>
              <p className="mt-3">
                We take the security of your personal information seriously. We implement appropriate
                technical and organizational measures to protect your data against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Sharing of Information
              </h2>
              <p className="mt-3">
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Laboratory Partners:</strong> To process and
                  complete your DNA test through our AABB-accredited laboratory partners.
                </li>
                <li>
                  <strong className="text-foreground">Legal Requirements:</strong> When required by
                  law, court order, or governmental authority.
                </li>
                <li>
                  <strong className="text-foreground">Service Providers:</strong> With trusted
                  third-party service providers who assist us in operating our website and conducting
                  our business, provided they agree to keep your information confidential.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Cookies and Tracking
              </h2>
              <p className="mt-3">
                Our website may use cookies and similar tracking technologies to enhance your
                browsing experience and analyze site traffic. You can control cookie preferences
                through your browser settings. Disabling cookies may affect the functionality of
                certain features on our website.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Third-Party Links
              </h2>
              <p className="mt-3">
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices or content of those sites. We encourage you to review the privacy
                policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Your Rights
              </h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information, subject to legal requirements</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Children's Privacy
              </h2>
              <p className="mt-3">
                Our website is not directed at children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you believe we have
                inadvertently collected such information, please contact us so we can promptly remove
                it.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with an updated "Last updated" date. We encourage you to review this page
                periodically.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy or how we handle your
                information, please contact us:
              </p>
              <ul className="mt-3 space-y-1">
                <li>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  <a href={SITE.phoneTel} className="text-secondary underline">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a href={`mailto:${SITE.email}`} className="text-secondary underline">
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Address:</strong> {SITE.address}
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
