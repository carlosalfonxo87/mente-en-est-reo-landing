import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AudioPlayer from "@/components/AudioPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <AudioPlayer />
      <Footer />
    </div>
  );
};

export default Index;
