import { MapPin, Shield, Heart, Clock, Phone } from "lucide-react";
import { SITE, WHY_CHOOSE_US } from "@/lib/siteData";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerChildren from "@/components/ui/StaggerChildren";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin, Shield, Heart, Clock,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container-site">
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Why Dallas Families Choose MB Diagnostic Labs
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            We're not a big corporate lab. We're your neighbor. Here's what sets MB Diagnostic Labs apart from every other testing provider in the DFW metroplex.
          </p>
        </AnimateIn>

        <StaggerChildren className="mt-12 grid gap-8 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.icon] || Shield;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10">
                  <Icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </StaggerChildren>

        <AnimateIn variant="fadeUp" delay={0.2} className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg gradient-cta px-8 py-4 text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
            style={{ minHeight: "48px" }}
          >
            <Phone className="h-5 w-5" />
            Schedule Your Test
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
