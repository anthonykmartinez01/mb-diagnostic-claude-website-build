import { Phone, ChevronRight, AlertTriangle } from "lucide-react";
import { SITE, SERVICE_CATEGORIES, BOOKING_URL } from "@/lib/siteData";

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding">
      <div className="container-site">
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          Mobile DNA Testing Services in Dallas, TX
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          From paternity and family relationship testing to immigration and specialty DNA services, we bring professional, AABB accredited testing directly to you. 13 tests available.
        </p>

        <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-16">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.id} id={category.id}>
              <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl md:text-2xl">
                {category.name}
              </h3>
              <p className="mt-1.5 max-w-2xl text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                {category.description}
              </p>
              <div className="gradient-divider mt-3 w-16 rounded-full" />

              <div className="mt-5 grid gap-4 sm:mt-6 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => {
                  const serviceUrl = "bookingUrl" in service ? (service as any).bookingUrl : BOOKING_URL;
                  return (
                    <div
                      key={service.id}
                      id={service.id}
                      className="group flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6"
                    >
                      <h4 className="font-heading text-base font-semibold text-foreground sm:text-lg">
                        {service.name}
                      </h4>
                      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                        {service.description}
                      </p>

                      {"isPrenatal" in service && service.isPrenatal && "prenatalSteps" in service && (
                        <div className="mt-3 space-y-2 sm:mt-4">
                          <p className="text-xs font-bold text-foreground sm:text-sm">How It Works:</p>
                          <ol className="space-y-1.5">
                            {(service as any).prenatalSteps.map((s: any) => (
                              <li key={s.step} className="flex items-start gap-2 text-xs sm:text-sm">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground">
                                  {s.step}
                                </span>
                                <span className="text-muted-foreground">
                                  <strong className="text-foreground">{s.title}</strong> — {s.desc}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {"isPrenatal" in service && service.isPrenatal && "prenatalNotice" in service && (
                        <div className="mt-3 flex items-start gap-2 rounded-lg border border-accent bg-accent/10 p-3 sm:mt-4">
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <p className="text-[11px] font-semibold leading-relaxed text-foreground sm:text-xs">
                            {(service as any).prenatalNotice}
                          </p>
                        </div>
                      )}

                      <p className="mt-2.5 text-sm font-bold text-secondary sm:mt-3">
                        {service.price}
                      </p>
                      {"legalNote" in service && service.legalNote && (
                        <p className="mt-0.5 text-[11px] text-muted-foreground italic sm:mt-1 sm:text-xs">
                          {service.legalNote}
                        </p>
                      )}
                      <a
                        href={serviceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-accent sm:mt-4"
                        style={{ minHeight: "44px" }}
                      >
                        Schedule This Test <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 sm:mt-6">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent sm:px-6"
                  style={{ minHeight: "48px" }}
                >
                  <Phone className="h-4 w-4" />
                  Schedule {category.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center sm:mt-16 sm:p-8">
          <p className="font-heading text-base font-bold text-foreground sm:text-lg">
            Not Sure Which Test You Need?
          </p>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
            Call us — we'll help you figure out exactly which DNA test is right for your situation. No pressure, no judgment.
          </p>
          <a
            href={SITE.phoneTel}
            className="mt-4 inline-flex items-center gap-2 rounded-lg gradient-cta px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-transform hover:scale-105 sm:px-8"
            style={{ minHeight: "48px" }}
          >
            <Phone className="h-4 w-4" />
            Call Us, We'll Help
          </a>
        </div>
      </div>
    </section>
  );
}
