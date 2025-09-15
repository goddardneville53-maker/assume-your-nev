import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen cosmic-grain">
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;