import { Shield, Clock, MapPin, Award, Lock } from "lucide-react";

const signals = [
  { icon: Shield, label: "AABB Accredited Lab Partner" },
  { icon: Clock, label: "Results in 2 to 5 Days" },
  { icon: MapPin, label: "We Come to You" },
  { icon: Award, label: "Court Admissible" },
  { icon: Lock, label: "100% Confidential" },
];

export default function TrustSignals() {
  return (
    <section id="trust" className="border-b border-border bg-muted/50">
      <div className="container-site py-5">
        <div className="flex flex-wrap items-center justify-center gap-6 md:justify-between">
          {signals.map((s) => (
            <div key={s.label} className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                <s.icon className="h-4.5 w-4.5 text-secondary" />
              </div>
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
