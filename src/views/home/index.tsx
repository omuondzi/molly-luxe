import HeroSection from "@views/components/hero-section";
import ImpactSection from "./impact";
import Programs from "./programs";

const HomePageView = () => {
  return (
    <main className="min-h-screen pb-20">
      {/* hero section */}
      <HeroSection
        title="Luala Community Center"
        description="Join Us in transforming lives through Education, Shelter and Community Support"
      />
      <Programs />
      <ImpactSection />
    </main>
  );
};

export default HomePageView;
