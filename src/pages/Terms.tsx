import { SITE } from "@/lib/siteData";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | MB Diagnostic Labs"
        description="Read the MB Diagnostic Labs terms of service. Understand the terms and conditions for using our website and DNA testing services."
        canonical="https://mbdiagnostic.com/terms"
      />
      <Header />
      <main className="pt-32 pb-16">
        <div className="container-site max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: March 29, 2026
          </p>

          <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Acceptance of Terms
              </h2>
              <p className="mt-3">
                By accessing or using the {SITE.name} website at{" "}
                <a href={SITE.url} className="text-secondary underline">
                  {SITE.url}
                </a>{" "}
                or any of our services, you agree to be bound by these Terms of Service. If you do
                not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Description of Services
              </h2>
              <p className="mt-3">
                {SITE.name} provides mobile DNA testing services in Dallas, Texas and the DFW
                Metroplex. Our services include paternity testing, maternity testing, prenatal
                paternity testing, immigration DNA testing, and other relationship DNA tests. All
                testing is conducted through AABB-accredited laboratory partners.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Use of Website
              </h2>
              <p className="mt-3">You agree to use this website only for lawful purposes. You may not:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Use the site in any way that violates applicable laws or regulations</li>
                <li>
                  Attempt to interfere with the proper functioning of the website
                </li>
                <li>
                  Use automated systems or software to extract data from the website without our
                  written permission
                </li>
                <li>
                  Impersonate any person or entity or misrepresent your affiliation with any person
                  or entity
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Pricing and Payment
              </h2>
              <p className="mt-3">
                All prices listed on our website are starting prices and are subject to change
                without notice. Final pricing may vary depending on the specific test, number of
                participants, and whether court-admissible documentation is required. Please contact
                us to confirm current pricing before scheduling your test.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Test Results and Accuracy
              </h2>
              <p className="mt-3">
                DNA test results are processed by AABB-accredited laboratories and are delivered via
                email. While our laboratory partners maintain the highest standards of accuracy,{" "}
                {SITE.name} acts as a collection and coordination service and does not perform
                laboratory analysis directly. Results are typically available within 2 to 5 business
                days after samples are received by the laboratory.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Court Admissible Testing
              </h2>
              <p className="mt-3">
                Court admissible tests follow strict chain of custody procedures as required by
                courts and government agencies. Results from court admissible tests are accepted by
                Texas family courts, child support agencies (OAG), immigration authorities, and
                custody proceedings. Additional fees apply for court admissible testing.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Cancellations and Refunds
              </h2>
              <p className="mt-3">
                Please contact us as soon as possible if you need to reschedule or cancel an
                appointment. Refund eligibility depends on whether sample collection has already
                taken place. Contact us at{" "}
                <a href={SITE.phoneTel} className="text-secondary underline">
                  {SITE.phone}
                </a>{" "}
                to discuss cancellations or refunds.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Limitation of Liability
              </h2>
              <p className="mt-3">
                To the fullest extent permitted by law, {SITE.name} shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or
                related to your use of our website or services. Our total liability for any claim
                shall not exceed the amount you paid for the specific service giving rise to the
                claim.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Disclaimer
              </h2>
              <p className="mt-3">
                The information provided on this website is for general informational purposes only
                and does not constitute medical or legal advice. {SITE.name} is not a medical
                provider or law firm. For medical questions, consult your healthcare provider. For
                legal questions regarding DNA testing, consult a qualified attorney.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Intellectual Property
              </h2>
              <p className="mt-3">
                All content on this website, including text, images, logos, and design elements, is
                the property of {SITE.name} and is protected by applicable intellectual property
                laws. You may not reproduce, distribute, or create derivative works from our content
                without our written permission.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Governing Law
              </h2>
              <p className="mt-3">
                These Terms of Service are governed by and construed in accordance with the laws of
                the State of Texas, without regard to its conflict of law provisions. Any disputes
                arising from these terms shall be resolved in the courts of Dallas County, Texas.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Changes to These Terms
              </h2>
              <p className="mt-3">
                We reserve the right to update these Terms of Service at any time. Changes will be
                posted on this page with an updated "Last updated" date. Your continued use of our
                website after changes are posted constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions about these Terms of Service, please contact us:
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

export default Terms;
