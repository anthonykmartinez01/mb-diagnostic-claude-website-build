import { Phone, Mail, MapPin, CalendarCheck } from "lucide-react";
import { SITE, BOOKING_URL } from "@/lib/siteData";
import AnimateIn from "@/components/ui/AnimateIn";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding gradient-hero">
      <div className="container-site">
        <div className="mx-auto max-w-5xl">
          <AnimateIn>
            <h2 className="text-center font-heading text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
              Schedule Your Mobile DNA Test
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-center text-sm text-primary-foreground/90 sm:mt-4 sm:text-base">
              Ready to get answers? Select a service below to book your appointment, or call us directly. Tricia will come to you anywhere in the DFW metroplex.
            </p>
          </AnimateIn>

          <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-10 lg:grid-cols-5">
            <AnimateIn className="space-y-3 sm:space-y-6 lg:col-span-2">
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-4 transition-colors hover:bg-primary-foreground/20 sm:gap-4 sm:p-5"
                style={{ minHeight: "48px" }}
              >
                <Phone className="h-6 w-6 shrink-0 text-primary-foreground sm:h-7 sm:w-7" />
                <div>
                  <span className="text-base font-bold text-primary-foreground sm:text-lg">{SITE.phone}</span>
                  <span className="block text-xs text-primary-foreground/80 sm:text-sm">Call or Text</span>
                </div>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-4 transition-colors hover:bg-primary-foreground/20 sm:gap-4 sm:p-5"
                style={{ minHeight: "48px" }}
              >
                <Mail className="h-6 w-6 shrink-0 text-primary-foreground sm:h-7 sm:w-7" />
                <div className="min-w-0">
                  <span className="text-xs font-bold text-primary-foreground break-all sm:text-sm">{SITE.email}</span>
                  <span className="block text-xs text-primary-foreground/80 sm:text-sm">Email Us</span>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-primary-foreground/10 p-4 sm:gap-4 sm:p-5">
                <MapPin className="h-6 w-6 shrink-0 text-primary-foreground sm:h-7 sm:w-7" />
                <div>
                  <span className="text-xs font-bold text-primary-foreground sm:text-sm">{SITE.address}</span>
                  <span className="block text-xs text-primary-foreground/80 sm:text-sm">We Come to You</span>
                </div>
              </div>
              <div className="rounded-xl bg-primary-foreground/5 p-4 sm:p-5">
                <p className="text-sm font-semibold text-primary-foreground">Your Answers Are One Phone Call Away</p>
                <p className="mt-1.5 text-xs text-primary-foreground/80 sm:mt-2 sm:text-sm">
                  Don't wait another day wondering. Call now for a free, confidential consultation.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn variant="fadeUp" delay={0.15} className="flex flex-col items-center justify-center lg:col-span-3">
              <div className="w-full rounded-2xl bg-primary-foreground p-6 text-center shadow-lg sm:p-10">
                <CalendarCheck className="mx-auto h-12 w-12 text-secondary sm:h-16 sm:w-16" />
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground sm:text-2xl">
                  Book Your DNA Test Online
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
                  Browse our services, pick the test you need, and choose a time that works for you — all in one place.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg gradient-cta px-8 py-4 text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-105 sm:px-10 sm:text-lg"
                  style={{ minHeight: "48px" }}
                >
                  <CalendarCheck className="h-5 w-5" />
                  View Services & Book Now
                </a>
                <p className="mt-4 text-xs text-muted-foreground">
                  You'll select your test, then pick an available appointment time.
                </p>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
