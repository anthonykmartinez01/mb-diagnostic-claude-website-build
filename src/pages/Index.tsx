import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import HeroSection from "@/components/sections/HeroSection";
import TrustSignals from "@/components/sections/TrustSignals";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceAreas from "@/components/sections/ServiceAreas";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalCTAStrip from "@/components/sections/FinalCTAStrip";
import { BUSINESS_SCHEMA, SERVICES_SCHEMA, FAQ_SCHEMA } from "@/lib/schema";

const Index = () => {
  return (
    <>
      <SEOHead
        title="Mobile DNA Testing Dallas TX | Paternity, Legal & Immigration DNA Tests | MB Diagnostic Labs"
        description="Mobile DNA testing in Dallas & the DFW Metroplex. Paternity tests, legal DNA, immigration DNA, and more. We come to you anywhere in DFW. Call (972) 268-2359 to schedule."
        canonical="https://mbdiagnostic.com/"
        schemaJson={[BUSINESS_SCHEMA, ...SERVICES_SCHEMA, FAQ_SCHEMA] as any}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustSignals />
        <WhyChooseUs />
        <div className="gradient-divider" />
        <ServicesSection />
        <div className="gradient-divider" />
        <PricingSection />
        <div className="gradient-divider" />
        <HowItWorks />
        <div className="gradient-divider" />
        <ServiceAreas />
        <div className="gradient-divider" />
        <AboutSection />
        <div className="gradient-divider" />
        {/* <TestimonialsSection /> */}
        {/* <div className="gradient-divider" /> */}
        <FAQSection />
        <ContactSection />
        <FinalCTAStrip />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
