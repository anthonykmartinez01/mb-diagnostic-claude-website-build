import { SITE, FAQ_DATA } from "@/lib/siteData";

export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE.url}/#business`,
  "name": SITE.name,
  "description": "Mobile DNA testing services in Dallas, TX and the DFW Metroplex. Court-admissible and peace-of-mind DNA testing at your location.",
  "url": SITE.url,
  "telephone": "+19453455767",
  "email": SITE.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1910 Pacific Ave Suite 2000 PMB2181",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "postalCode": "75201",
    "addressCountry": "US",
  },
  "areaServed": [
    { "@type": "City", "name": "Dallas", "sameAs": "https://en.wikipedia.org/wiki/Dallas" },
    { "@type": "City", "name": "Fort Worth" },
    { "@type": "City", "name": "Arlington" },
    { "@type": "City", "name": "Irving" },
    { "@type": "City", "name": "Garland" },
    { "@type": "City", "name": "Mesquite" },
    { "@type": "City", "name": "McKinney" },
    { "@type": "City", "name": "Denton" },
    { "@type": "City", "name": "Grapevine" },
    { "@type": "City", "name": "DeSoto" },
    { "@type": "City", "name": "Lancaster" },
    { "@type": "City", "name": "Duncanville" },
    { "@type": "City", "name": "Red Oak" },
    { "@type": "City", "name": "Ovilla" },
    { "@type": "City", "name": "Farmers Branch" },
    { "@type": "City", "name": "Forney" },
    { "@type": "City", "name": "Rockwall" },
    { "@type": "City", "name": "Corsicana" },
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61563847662877",
    "https://www.instagram.com/mb.diagnostic.labs/",
  ],
  "priceRange": "$$",
  "founder": { "@type": "Person", "name": "Tricia Brown" },
};

export const SERVICES_SCHEMA = [
  { serviceType: "Paternity DNA Test", description: "Determine biological fatherhood with 99.99% accuracy. Peace of mind starting at $129, court admissible starting at $229." },
  { serviceType: "Maternity DNA Test", description: "Confirm a biological mother and child relationship. Peace of mind starting at $129, court admissible starting at $229." },
  { serviceType: "Prenatal Paternity Test", description: "Non-invasive prenatal paternity testing available as early as 7 weeks into pregnancy. Starting at $399." },
  { serviceType: "Grandparent DNA Test", description: "Establish biological relationship between grandparent and grandchild when the alleged father is unavailable. Starting at $189." },
  { serviceType: "Sibling DNA Test", description: "Determine whether two individuals are full or half siblings through DNA analysis. Starting at $189." },
  { serviceType: "Aunt/Uncle (Avuncular) DNA Test", description: "Establish biological relationship between an aunt or uncle and a niece or nephew. Starting at $189." },
  { serviceType: "Twin Zygosity DNA Test", description: "Determine whether twins are identical or fraternal through DNA comparison. Starting at $189." },
  { serviceType: "Missing Parent DNA Test", description: "Establish biological relationships through other family members when an alleged parent is unavailable or deceased. Starting at $289." },
  { serviceType: "Paternal Lineage DNA Test", description: "Trace the male line of a family by analyzing Y-chromosome DNA. Starting at $349." },
  { serviceType: "Immigration DNA Test", description: "AABB-accredited DNA testing accepted by USCIS, U.S. embassies, and consulates worldwide for immigration cases. Starting at $450." },
  { serviceType: "Forensic DNA Testing", description: "DNA analysis from non-standard samples such as hair, fingernails, toothbrushes, and personal items. Starting at $500." },
  { serviceType: "Infidelity DNA Test", description: "Discreet DNA testing from personal items handled with complete confidentiality. Contact for pricing." },
].map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": s.serviceType,
  "provider": { "@id": `${SITE.url}/#business` },
  "areaServed": { "@type": "Place", "name": "Dallas Fort Worth Metroplex, TX" },
  "description": s.description,
}));

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
  })),
};
