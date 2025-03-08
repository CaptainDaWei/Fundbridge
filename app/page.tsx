import CallToActionSection from "@/components/landing/cta-section";
import CircularUspSection from "@/components/landing/circular-usp-section";
import FeatureCards from "@/components/landing/feature-cards";
import HeroSection from "@/components/landing/hero-section";
import ImageShowcase from "@/components/landing/image-showcase";
import PricingSection from "@/components/landing/pricing-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import Particles from "@/components/magicui/particles";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default async function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <SiteHeader />
      <Particles
        className="fixed inset-0 -z-10 pointer-events-none"
        quantity={100}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
      <HeroSection />
      <CircularUspSection />
      <ImageShowcase />
      <TestimonialsSection />
      <PricingSection />
      <FeatureCards />
      <CallToActionSection />
      <SiteFooter />
    </div>
  );
} 