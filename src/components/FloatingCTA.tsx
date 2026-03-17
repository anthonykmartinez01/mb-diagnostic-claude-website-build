import { Phone } from "lucide-react";
import { SITE } from "@/lib/siteData";

export default function FloatingCTA() {
  return (
    <a
      href={SITE.phoneTel}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-cta shadow-lg transition-transform hover:scale-110 md:hidden"
      aria-label={`Call ${SITE.phone}`}
      style={{ boxShadow: "var(--shadow-cta)" }}
    >
      <Phone className="h-6 w-6 text-primary-foreground" />
    </a>
  );
}
