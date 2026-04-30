export const BOOKING_URL = "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo";

export const SITE = {
  name: "MB Diagnostic Labs",
  legalName: "MB Diagnostic Labs",
  phone: "(945) 345-5767",
  phoneTel: "tel:+19453455767",
  email: "tricia_brown23@yahoo.com",
  address: "1910 Pacific Ave Suite 2000 PMB2181, Dallas, TX",
  facebook: "https://www.facebook.com/profile.php?id=61563847662877",
  instagram: "https://www.instagram.com/mb.diagnostic.labs/",
  tagline: "MB Diagnostic Labs | Mobile DNA Testing Serving Dallas & the DFW Metroplex",
  slogan: "You have questions, We have answers!",
  url: "https://mbdiagnostic.com",
} as const;

export const NAV_ITEMS = [
  { label: "Why Us", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Areas We Serve", href: "#service-areas" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const TRUST_SIGNALS = [
  { icon: "Shield", label: "AABB Accredited Lab Partner" },
  { icon: "Clock", label: "Results in 2 to 5 Business Days" },
  { icon: "MapPin", label: "We Come to You, Mobile Testing" },
  { icon: "Award", label: "Court Admissible Results" },
  { icon: "Lock", label: "100% Confidential" },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "MapPin",
    title: "We Come to You, Anywhere in DFW",
    description: "No clinic visits, no waiting rooms. Tricia travels to your office or any convenient location across the entire Dallas Fort Worth metroplex. Mobile testing on YOUR schedule.",
  },
  {
    icon: "Shield",
    title: "AABB Accredited, Court Admissible Results",
    description: "Every legal test is processed through an AABB accredited laboratory, ensuring your results are accepted by courts, child support agencies, and immigration authorities.",
  },
  {
    icon: "Heart",
    title: "Compassionate, Judgment Free Service",
    description: "DNA testing involves sensitive family matters. Tricia handles every case with discretion, empathy, and professionalism because your privacy and dignity matter.",
  },
  {
    icon: "Clock",
    title: "Fast Results, 2 to 5 Business Days",
    description: "No weeks of waiting and wondering. Most test results are delivered within 2 to 5 business days, so you can move forward with answers quickly.",
  },
] as const;

export const SERVICE_CATEGORIES = [
  {
    id: "paternity-testing",
    name: "Paternity & Maternity Testing",
    description: "Establish biological parentage with confidence. Whether you need answers for personal peace of mind or court admissible proof, we offer multiple testing options to fit your situation.",
    services: [
      {
        id: "paternity-test",
        name: "Paternity DNA Test",
        description: "Determine biological fatherhood with 99.99% accuracy. Available as a peace of mind test for personal knowledge or as a court admissible legal test with strict chain of custody procedures. Results accepted by Texas family courts, child support agencies (OAG), and custody proceedings.",
        price: "Starting at $129",
        legalNote: "Court admissible testing available at an additional cost.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/paternity-dna",
      },
      {
        id: "maternity-test",
        name: "Maternity DNA Test",
        description: "Need to confirm a biological mother and child relationship? A maternity DNA test provides definitive answers for personal peace of mind or legal proceedings. Available as both a peace of mind and court admissible option.",
        price: "Starting at $129",
        legalNote: "Court admissible testing available at an additional cost.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/maternity-dna",
      },
      {
        id: "prenatal-paternity",
        name: "Prenatal Paternity Test",
        description: "Need to determine paternity during pregnancy? Our prenatal paternity test (Amnio/CVS) allows you to get answers before the baby is born. This peace-of-mind test includes one mother and one alleged father, with results in as little as 5 business days once samples are received at the lab.",
        price: "Starting at $399",
        legalNote: "Court admissible: Starting at $549. Additional alleged father: +$200 each.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/prenatal-paternity",
        isPrenatal: true,
        prenatalSteps: [
          { step: 1, title: "Order Your Test", desc: "Contact MB Diagnostic Labs to place your order" },
          { step: 2, title: "OBGYN Confirmation", desc: "We'll confirm your OBGYN is approved and ship your collection kit" },
          { step: 3, title: "Sample Collection", desc: "Your OBGYN performs the sample collection, completes the required paperwork, copies approved IDs, and ships everything to the laboratory" },
          { step: 4, title: "Get Results", desc: "Results are issued in as little as 5 business days" },
        ],
        prenatalNotice: "Important: Prenatal paternity tests must be collected by your OBGYN. Please contact your OBGYN before ordering to confirm they are willing to perform the sample collection.",
      },
    ],
  },
  {
    id: "family-relationship",
    name: "Family Relationship Testing",
    description: "When direct paternity testing isn't possible, family relationship DNA tests can help establish biological connections between grandparents, siblings, aunts, and uncles.",
    services: [
      {
        id: "grandparent-dna",
        name: "Grandparent DNA Test",
        description: "Establish a biological relationship between a grandparent and grandchild when the alleged father is unavailable for testing. This test is commonly used in custody, inheritance, and immigration cases.",
        price: "Starting at $189",
        legalNote: "Court admissible testing available at an additional cost.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/grandparent-dna",
      },
      {
        id: "sibling-dna",
        name: "Sibling DNA Test",
        description: "Determine whether two individuals share one parent (half siblings) or both parents (full siblings). Useful for family reunification, inheritance claims, and personal peace of mind.",
        price: "Starting at $189",
        legalNote: "Court admissible testing available at an additional cost.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/sibling-dna",
      },
      {
        id: "avuncular-dna",
        name: "Aunt/Uncle (Avuncular) DNA Test",
        description: "Establish a biological relationship between an aunt or uncle and a niece or nephew. This indirect test helps confirm family connections when a parent is unavailable for direct testing.",
        price: "Starting at $189",
        legalNote: "Court admissible testing available at an additional cost.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/auntuncle-dna",
      },
      {
        id: "twin-zygosity",
        name: "Twin Zygosity DNA Test",
        description: "Determine whether twins are identical (monozygotic) or fraternal (dizygotic). This test compares the DNA profiles of both twins to provide a definitive answer about their biological relationship.",
        price: "Starting at $189",
        legalNote: "Court admissible testing available at an additional cost.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/twin-zygosity",
      },
    ],
  },
  {
    id: "immigration-dna",
    name: "Immigration DNA Testing",
    description: "USCIS approved DNA testing to support visa petitions and immigration cases. We understand the urgency and sensitivity of immigration matters and work to expedite your testing process.",
    services: [
      {
        id: "immigration-dna-test",
        name: "Immigration DNA Test",
        description: "AABB accredited DNA testing accepted by USCIS, U.S. embassies, and consulates worldwide. We coordinate international sample collection with accredited facilities abroad and handle all chain of custody documentation required for your immigration case.",
        price: "Starting at $450",
      },
    ],
  },
  {
    id: "specialty-testing",
    name: "Specialty DNA Testing",
    description: "Beyond standard paternity and relationship tests, we offer specialized DNA testing services for unique situations, from forensic analysis to extended family lineage.",
    services: [
      {
        id: "missing-parent-dna",
        name: "Missing Parent DNA Test",
        description: "When an alleged parent is unavailable or deceased, a missing parent DNA test can establish biological relationships through other family members. This indirect testing method analyzes DNA from available relatives to determine parentage.",
        price: "Starting at $289",
        legalNote: "Court admissible testing available at an additional cost.",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/missing-parent",
      },
      {
        id: "paternal-lineage-dna",
        name: "Paternal Lineage DNA Test",
        description: "A paternal lineage test traces the male line of a family by analyzing Y chromosome DNA. This test can confirm whether two or more males share the same paternal line, useful when the alleged father is unavailable for direct testing.",
        price: "Starting at $349",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/paternal-lineage",
      },
      {
        id: "forensic-dna",
        name: "Forensic DNA Testing",
        description: "DNA analysis from non standard samples such as hair, fingernails, toothbrushes, clothing, and other personal items. Ideal when a standard cheek swab isn't possible or when testing needs to be conducted discreetly.",
        price: "Starting at $500",
      },
      {
        id: "infidelity-dna",
        name: "Infidelity DNA Test",
        description: "Discreet DNA testing from personal items to determine if biological material belongs to a specific individual. All testing is handled with complete confidentiality and sensitivity.",
        price: "Varies. Contact for quote",
        bookingUrl: "https://book.mbdiagnostic.com/booking/mb-diagnostic-labs-llc-aa32gahdqo/sv/infidelity-dna",
      },
    ],
  },
] as const;

export const PRICING_TABLE = [
  { test: "Paternity", peaceOfMind: "$129", courtAdmissible: "$229" },
  { test: "Maternity", peaceOfMind: "$129", courtAdmissible: "$229" },
  { test: "Twin Zygosity", peaceOfMind: "$189", courtAdmissible: "$289" },
  { test: "Sibling", peaceOfMind: "$189", courtAdmissible: "$289" },
  { test: "Aunt/Uncle", peaceOfMind: "$189", courtAdmissible: "$289" },
  { test: "Grandparent", peaceOfMind: "$189", courtAdmissible: "$289" },
  { test: "Missing Parent", peaceOfMind: "$289", courtAdmissible: "$439" },
  { test: "Paternal Lineage", peaceOfMind: "$349", courtAdmissible: "$349" },
  { test: "Prenatal Paternity", peaceOfMind: "$399", courtAdmissible: "$549" },
  { test: "Infidelity", peaceOfMind: "Varies", courtAdmissible: "Varies" },
] as const;

export const PRICING_ADDONS = [
  { label: "Add Mother to Test (Recommended)", price: "+$25" },
  { label: "Additional Family Member", price: "+$75 per person" },
  { label: "Rush Results, Next Business Day", price: "+$300" },
  { label: "Rush Results, Same Day", price: "+$600" },
] as const;

export const SERVICE_AREAS = [
  "Dallas", "Lancaster", "DeSoto", "Duncanville", "Arlington",
  "Red Oak", "Ovilla", "Grapevine", "Garland", "Mesquite",
  "Irving", "Farmers Branch", "Forney", "McKinney", "Denton",
  "Rockwall", "Fort Worth", "Corsicana",
] as const;

export const FAQ_DATA = [
  {
    question: "How does mobile DNA testing work?",
    answer: "It's simple. You call or schedule online, and Tricia comes directly to your location anywhere in the DFW metroplex. She collects DNA samples using a painless cheek swab, follows all chain of custody procedures for legal tests, and sends samples to our AABB accredited lab. You receive results within 2 to 5 business days via email.",
  },
  {
    question: "How much does a paternity test cost?",
    answer: "Peace of mind paternity tests start at $129 and court admissible paternity tests start at $229. We offer 13 different DNA testing services with transparent, upfront pricing. Call us at (945) 345-5767 for a free, confidential quote. No hidden fees, ever.",
  },
  {
    question: "Are your DNA test results legally admissible in court?",
    answer: "Yes. All legal DNA tests are processed through an AABB accredited laboratory with strict chain of custody procedures. Our results are accepted by Texas family courts, the Office of the Attorney General (OAG), child support agencies, USCIS for immigration cases, and other legal entities.",
  },
  {
    question: "How long does it take to get DNA test results?",
    answer: "Most DNA test results are available within 2 to 5 business days after samples arrive at the laboratory. All results are delivered via email to the address provided at the time of booking. Rush processing is available for urgent cases: next business day (+$300) or same day (+$600).",
  },
  {
    question: "Do you offer prenatal paternity testing?",
    answer: "Yes! We offer a prenatal paternity test (Amnio/CVS) that allows you to determine paternity before the baby is born. This test must be collected by your OBGYN. We coordinate with your doctor, ship the collection kit, and deliver results in as little as 5 business days once samples reach the lab. Starting at $399 for peace of mind, $549 for court admissible. Please confirm with your OBGYN that they are willing to perform the collection before ordering.",
  },
  {
    question: "What areas in DFW do you serve?",
    answer: "We provide mobile DNA testing across the entire Dallas Fort Worth metroplex, including Dallas, Fort Worth, Arlington, Irving, Garland, Mesquite, McKinney, Denton, Rockwall, Lancaster, DeSoto, Duncanville, Corsicana, and all surrounding communities within 45 miles of Dallas.",
  },
  {
    question: "Is DNA testing painful?",
    answer: "Not at all. Standard DNA testing uses a simple, painless cheek swab, similar to using a large Q tip on the inside of your cheek. The entire collection process takes less than 5 minutes. Prenatal testing requires a blood draw from the mother, which involves a standard needle stick.",
  },
  {
    question: "Can I use a peace of mind test in court?",
    answer: "No. Peace of mind tests are for personal knowledge only and are not legally admissible. If you need results for court, child support, custody, or any legal matter, you must order a court admissible test with proper chain of custody procedures. We can help you determine which test is right for your situation.",
  },
  {
    question: "What documents do I need for immigration DNA testing?",
    answer: "For immigration DNA testing, you'll typically need a valid government issued photo ID, your immigration case reference number, and the embassy or USCIS letter requesting DNA testing. Tricia will guide you through all documentation requirements when you schedule your appointment.",
  },
  {
    question: "How accurate are your DNA tests?",
    answer: "Our DNA tests provide 99.99% accuracy for inclusion (confirming a biological relationship) and 100% accuracy for exclusion (ruling out a biological relationship). All tests are processed by AABB accredited laboratories using the latest genetic testing technology.",
  },
  {
    question: "How many types of DNA tests do you offer?",
    answer: "We offer 13 different DNA testing services, including Paternity, Maternity, Prenatal Paternity, Grandparent, Sibling, Aunt/Uncle, Twin Zygosity, Missing Parent, Paternal Lineage, Immigration, Forensic, and Infidelity testing. Not sure which test you need? Call us and we'll help you figure it out.",
  },
] as const;

// Keep backward compat
export const FAQ_QUESTIONS = FAQ_DATA.map((f) => f.question);
