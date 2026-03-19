import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorks from "@/components/home/HowItWorks";
import PortfolioSection from "@/components/home/PortfolioSection";
import QuoteCalculator from "@/components/home/QuoteCalculator";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTABanner from "@/components/home/CTABanner";

interface IndexProps {
  onOpenQuote: () => void;
}

const Index = ({ onOpenQuote }: IndexProps) => (
  <main>
    <HeroSection onOpenQuote={onOpenQuote} />
    <StatsBar />
    <ServicesSection />
    <HowItWorks />
    <PortfolioSection />
    <QuoteCalculator />
    <TestimonialsSection />
    <WhyChooseUs />
    <CTABanner onOpenQuote={onOpenQuote} />
  </main>
);

export default Index;
