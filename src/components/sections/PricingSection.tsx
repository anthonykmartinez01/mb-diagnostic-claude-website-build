import { Phone } from "lucide-react";
import { SITE, PRICING_TABLE, PRICING_ADDONS } from "@/lib/siteData";

export default function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-site">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          Transparent Pricing
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          We believe in upfront pricing. Here's what to expect — no hidden fees.
        </p>

        {/* Desktop table */}
        <div className="mt-8 hidden sm:block overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 font-heading font-bold text-foreground">Test</th>
                <th className="px-4 py-3 font-heading font-bold text-secondary">Peace of Mind</th>
                <th className="px-4 py-3 font-heading font-bold text-secondary">Court Admissible</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_TABLE.map((row, i) => (
                <tr
                  key={row.test}
                  className={i % 2 === 0 ? "bg-card" : "bg-accent/5"}
                >
                  <td className="px-4 py-3 font-semibold text-foreground">{row.test}</td>
                  <td className="px-4 py-3 text-muted-foreground">Starting at {row.peaceOfMind}</td>
                  <td className="px-4 py-3 text-muted-foreground">Starting at {row.courtAdmissible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-8 space-y-2.5 sm:hidden">
          {PRICING_TABLE.map((row, i) => (
            <div
              key={row.test}
              className={`rounded-lg border border-border p-3.5 ${i % 2 === 0 ? "bg-card" : "bg-accent/5"}`}
            >
              <p className="font-heading text-sm font-bold text-foreground">{row.test}</p>
              <div className="mt-1.5 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-semibold text-secondary">Peace of Mind</span>
                  <p className="mt-0.5 text-muted-foreground">{row.peaceOfMind}</p>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-secondary">Court Admissible</span>
                  <p className="mt-0.5 text-muted-foreground">{row.courtAdmissible}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-8 rounded-xl border border-border bg-card p-4 sm:p-8">
          <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">Additional Options</h3>
          <div className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
            {PRICING_ADDONS.map((addon) => (
              <div key={addon.label} className="flex items-start justify-between gap-3 text-xs sm:text-sm">
                <span className="text-muted-foreground">{addon.label}</span>
                <span className="shrink-0 font-semibold text-foreground">{addon.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 border-t border-border pt-3 sm:mt-6 sm:pt-4">
            <h4 className="font-heading text-xs font-bold text-foreground sm:text-sm">Results Delivery</h4>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              All results are delivered via email to the address provided at the time of booking.
            </p>
          </div>
        </div>

        {/* Prenatal footnote */}
        <p className="mt-4 text-xs text-muted-foreground italic sm:text-sm">
          * Prenatal test requires OBGYN collection. Additional alleged father +$200.
        </p>

        {/* CTA */}
        <div className="mt-8 text-center sm:mt-10">
          <p className="text-sm text-muted-foreground">Not sure which test you need?</p>
          <a
            href={SITE.phoneTel}
            className="mt-3 inline-flex items-center gap-2 rounded-lg gradient-cta px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-105 sm:mt-4 sm:px-8"
            style={{ minHeight: "48px" }}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call {SITE.phone} — We'll Help You Figure It Out</span>
            <span className="sm:hidden">Call Us — We'll Help</span>
          </a>
        </div>
      </div>
    </section>
  );
}
