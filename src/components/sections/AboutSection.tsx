import { Award, Shield, CheckCircle } from "lucide-react";
import ownerPhoto from "@/assets/owner-tricia.webp";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ background: "linear-gradient(180deg, hsl(185 56% 67% / 0.06), transparent)" }}>
      <div className="container-site">
        <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
          About MB Diagnostic Labs
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-muted-foreground">
              MB Diagnostic Labs is owned and operated by <strong className="text-foreground">Tricia Brown</strong>, a certified DNA specimen collector serving families, attorneys, and individuals across the Dallas Fort Worth metroplex. Tricia founded MB Diagnostic Labs with a personal mission: to make DNA testing accessible, convenient, and stress free for every client she serves. She understands that DNA testing often comes during life's most sensitive moments, including custody disputes, immigration cases, and family questions, and she treats every client with the compassion, discretion, and professionalism they deserve. When you choose MB Diagnostic Labs, you're not dealing with a faceless corporation. You're working directly with Tricia, a dedicated professional who cares about getting you accurate answers as quickly and comfortably as possible.
            </p>
            

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
                <Shield className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold text-foreground">AABB Accredited Lab Partner</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
                <Award className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold text-foreground">Certified DNA Specimen Collector</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm font-semibold text-foreground">Fully Licensed & Insured</span>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:col-span-2">
            <img
              src={ownerPhoto}
              alt="Tricia Brown, owner of MB Diagnostic Labs"
              className="w-full max-w-sm rounded-2xl shadow-lg object-cover"
              loading="eager"
              decoding="async"
              width={600}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
