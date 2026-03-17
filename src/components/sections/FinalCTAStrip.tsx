import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function FinalCTAStrip() {
  return (
    <section className="gradient-primary py-10 sm:py-12">
      <div className="container-site text-center text-primary-foreground">
        <h2 className="font-heading text-xl font-bold sm:text-2xl md:text-3xl">
          Your Answers Are One Phone Call Away
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-sm opacity-90 sm:mt-3 sm:text-base">
          Don't wait another day wondering. Tricia will come to you anywhere in the DFW metroplex for fast, accurate, confidential DNA testing.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <a
            href={SITE.phoneTel}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 py-4 text-base font-bold text-primary shadow-lg transition-transform hover:scale-105 sm:w-auto sm:px-8"
            style={{ minHeight: "48px" }}
          >
            <Phone className="h-5 w-5" />
            Call Now {SITE.phone}
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-primary-foreground/40 px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10 sm:w-auto sm:px-8"
            style={{ minHeight: "48px" }}
          >
            <Calendar className="h-5 w-5" />
            Schedule Online
          </a>
        </div>
      </div>
    </section>
  );
}
