import { Phone } from "lucide-react";
import { SITE, FAQ_DATA } from "@/lib/siteData";
import AnimateIn from "@/components/ui/AnimateIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-site max-w-3xl">
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Common Questions About DNA Testing
          </h2>
          <p className="mt-3 text-muted-foreground">
            Get answers to the most frequently asked questions about our mobile DNA testing services.
          </p>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.15}>
        <Accordion type="single" collapsible className="mt-10">
          {FAQ_DATA.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </AnimateIn>

        <AnimateIn variant="fadeUp" delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">Have more questions?</p>
          <a
            href={SITE.phoneTel}
            className="mt-3 inline-flex items-center gap-2 rounded-lg gradient-cta px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            style={{ minHeight: "44px" }}
          >
            <Phone className="h-4 w-4" />
            Call Us at {SITE.phone}
          </a>
        </AnimateIn>
      </div>
    </section>
  );
}
