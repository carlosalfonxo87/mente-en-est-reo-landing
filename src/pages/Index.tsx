import HeroSection from "@/components/HeroSection";
import SoraSection from "@/components/SoraSection";
import ServicesSection from "@/components/ServicesSection";
import AudioPlayer from "@/components/AudioPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main>
        <HeroSection />
        <SoraSection />
        <ServicesSection />
        <AudioPlayer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
