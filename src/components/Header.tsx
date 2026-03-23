import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { SITE, NAV_ITEMS } from "@/lib/siteData";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import logo from "@/assets/logo.webp";

const sectionIds = NAV_ITEMS.map((n) => n.href.replace("#", ""));

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds, 80);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div
        className={`hidden sm:block gradient-primary transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="container-site flex items-center justify-between py-2 text-sm text-primary-foreground">
          <span className="font-medium">{SITE.tagline}</span>
          <a href={SITE.phoneTel} className="hidden items-center gap-1 font-semibold hover:text-soft-cyan sm:flex">
            <Phone className="h-3.5 w-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container-site flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="MB Diagnostic Labs logo" className="h-14 w-14 object-contain drop-shadow-md" />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-lg font-bold text-primary">MB Diagnostic Labs</span>
              <span className="text-xs text-muted-foreground">Mobile DNA Testing</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeId === item.href
                    ? "bg-muted text-secondary"
                    : "text-foreground hover:text-secondary"
                }`}
              >
                {activeId === item.href && (
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-diagnostic-teal" />
                )}
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={SITE.phoneTel}
              className="hidden items-center gap-2 rounded-lg gradient-cta px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md transition-shadow hover:shadow-lg sm:flex"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border xl:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="border-t border-border bg-background px-4 pb-4 xl:hidden" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-md px-4 py-3 text-base font-medium transition-colors ${
                  activeId === item.href
                    ? "bg-muted text-secondary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE.phoneTel}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg gradient-cta px-5 py-3 text-base font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call Now — {SITE.phone}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
