import { Phone, ArrowDown } from "lucide-react";
import { SITE } from "@/lib/siteData";
import heroBg from "@/assets/hero-bg.webp";

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex min-h-[88svh] sm:min-h-[70vh] md:min-h-[65vh] lg:min-h-[70vh] items-center justify-center sm:justify-start overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="DNA testing in Dallas Texas" className="h-full w-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container-site relative z-10 flex flex-col items-center py-28 text-center text-primary-foreground sm:items-start sm:text-left sm:py-20">
        <div className="max-w-2xl">
          <p className="text-base font-semibold italic opacity-90 sm:text-lg">
            &ldquo;{SITE.slogan}&rdquo;
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold leading-snug sm:text-5xl lg:text-6xl">
            <span className="block">MB Diagnostic Labs</span>
            <span className="block mt-2 text-xl font-bold opacity-90 sm:mt-1 sm:text-4xl lg:text-5xl">Dallas Mobile DNA Testing</span>
          </h1>
          <p className="mt-6 text-base leading-relaxed opacity-90 sm:mt-6 sm:text-xl">
            Paternity tests, legal DNA, immigration DNA, and more, collected at your office or any convenient location across the DFW metroplex. AABB accredited. Court admissible. Results in 2 to 5 days.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-foreground px-8 py-4 text-base font-bold text-primary shadow-lg transition-transform hover:scale-105"
              style={{ minHeight: "48px" }}
            >
              <Phone className="h-5 w-5" />
              Call Now {SITE.phone}
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/40 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
              style={{ minHeight: "48px" }}
            >
              View Our Services
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
