import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { SITE, NAV_ITEMS, SERVICE_AREAS } from "@/lib/siteData";
import logo from "@/assets/logo.webp";

export default function Footer() {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container-site py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="MB Diagnostic Labs logo" className="h-14 w-14 object-contain drop-shadow-md" />
              <h3 className="font-heading text-xl font-bold">MB Diagnostic Labs</h3>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <a href={SITE.phoneTel} className="flex items-center gap-2 hover:text-soft-cyan">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-soft-cyan">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {SITE.address}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-70">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-soft-cyan transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider opacity-70">Service Areas</h4>
            <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm opacity-80">
              {SERVICE_AREAS.map((city, i) => (
                <span key={city}>
                  {city}{i < SERVICE_AREAS.length - 1 ? " •" : ""}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs opacity-60">...and all surrounding DFW communities within 45 miles</p>
          </div>
        </div>

        {/* Social + Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/20 pt-8 sm:flex-row">
          <p className="text-sm opacity-70">© 2025 MB Diagnostic Labs | All Rights Reserved</p>
          <div className="flex items-center gap-4">
            <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-soft-cyan" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-soft-cyan" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
