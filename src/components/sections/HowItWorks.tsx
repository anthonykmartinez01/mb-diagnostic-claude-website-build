import { Phone, CalendarCheck, MapPin, FileCheck } from "lucide-react";
import { SITE } from "@/lib/siteData";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Call or Schedule Online",
    description: "Reach out by phone at (972) 268-2359 or use our contact form. Tell us which test you need and your preferred meeting location.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "We Come to You",
    description: "Tricia travels to your office or any convenient location anywhere in the DFW metroplex. No clinic visits, no waiting rooms, no hassle. Testing on YOUR schedule.",
  },
  {
    icon: MapPin,
    number: "3",
    title: "Quick & Painless Collection",
    description: "DNA samples are collected using a simple, painless cheek swab that takes less than 5 minutes. For legal tests, all chain of custody procedures are followed on site.",
  },
  {
    icon: FileCheck,
    number: "4",
    title: "Get Your Results Fast",
    description: "Samples are sent to our AABB accredited lab. You'll receive accurate, confidential results within 2 to 5 business days via email. Legal results include official documentation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding" style={{ background: "linear-gradient(180deg, hsl(185 56% 67% / 0.08), hsl(185 56% 67% / 0.03))" }}>
      <div className="container-site">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          How Mobile DNA Testing Works
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Getting a DNA test has never been easier. Here's exactly what to expect when you choose MB Diagnostic Labs.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-md">
                <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
              </div>
              <h3 className="mt-5 font-heading text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE.phoneTel}
            className="inline-flex items-center gap-2 rounded-lg gradient-cta px-8 py-4 text-base font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
            style={{ minHeight: "48px" }}
          >
            <Phone className="h-5 w-5" />
            Ready to Get Started? Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
