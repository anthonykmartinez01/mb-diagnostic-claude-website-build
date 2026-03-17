import { Phone, Home } from "lucide-react";
import { SITE } from "@/lib/siteData";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | MB Diagnostic Labs"
        description="The page you're looking for doesn't exist. Visit the MB Diagnostic Labs homepage for mobile DNA testing in Dallas and the DFW Metroplex."
        canonical="https://mbdiagnostic.com/404"
        noIndex
      />
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center pt-32 pb-16">
        <div className="container-site text-center">
          <h1 className="font-heading text-6xl font-extrabold text-primary">404</h1>
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">Page Not Found</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you're looking for doesn't exist. MB Diagnostic Labs is a single page site and everything you need is on our homepage.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-lg gradient-cta px-8 py-4 text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
              style={{ minHeight: "48px" }}
            >
              <Home className="h-5 w-5" />
              Go to Homepage
            </a>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              style={{ minHeight: "48px" }}
            >
              <Phone className="h-5 w-5" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
