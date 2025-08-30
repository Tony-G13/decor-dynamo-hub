import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CasesSection from "@/components/sections/CasesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CasesSection />
        <WhyUsSection />
        <ProblemsSection />
        <AboutSection />
        <ProcessSection />
        <PricingSection />
        <CalculatorSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
