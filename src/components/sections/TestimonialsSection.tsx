import { Star } from "lucide-react";

const reviewPlaceholders = [
  { name: "Satisfied Client", location: "Dallas, TX", text: "Review coming soon. We'll display real Google reviews once our Google Business Profile is live." },
  { name: "Satisfied Client", location: "Arlington, TX", text: "Review coming soon. We'll display real Google reviews once our Google Business Profile is live." },
  { name: "Satisfied Client", location: "Fort Worth, TX", text: "Review coming soon. We'll display real Google reviews once our Google Business Profile is live." },
];

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="section-padding gradient-subtle">
      <div className="container-site">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          What Our Clients Say About MB Diagnostic Labs
        </h2>
        <p className="mt-3 text-muted-foreground">
          Real experiences from real families across the DFW metroplex.
        </p>

        {/* PASTE GOOGLE REVIEWS EMBED CODE HERE ONCE GBP IS LIVE */}
        {/* Replace with real reviews and/or Google Reviews widget when available */}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviewPlaceholders.map((t, i) => (
            <div key={i} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-diagnostic-teal text-diagnostic-teal" />
                ))}
              </div>
              <p className="mt-3 text-sm italic text-muted-foreground">"{t.text}"</p>
              <div className="mt-4">
                <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
