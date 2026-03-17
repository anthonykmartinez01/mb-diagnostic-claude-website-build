import { MapPin, Phone } from "lucide-react";
import { SITE, SERVICE_AREAS } from "@/lib/siteData";

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-padding">
      <div className="container-site">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          Mobile DNA Testing Across the DFW Metroplex
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We bring professional DNA testing directly to you, no matter where you are in the Dallas Fort Worth area. Tricia serves clients across the entire metroplex, including:
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SERVICE_AREAS.map((city) => (
            <div
              key={city}
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-secondary hover:bg-muted"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
              {city}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          ...and all surrounding DFW communities within 45 miles of Dallas
        </p>

        <div className="mt-8 text-center">
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
            style={{ minHeight: "44px" }}
          >
            <Phone className="h-4 w-4" />
            Book Mobile DNA Testing in Your City
          </a>
        </div>
      </div>
    </section>
  );
}
