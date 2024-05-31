import ImpactSection from "./impact";
import Difference from "./difference";
import SolutionsCards from "@views/components/solutions-cards";
import HeroSection from "@views/components/hero-section";
import VisionSection from "@views/components/vision-section";

const HomePageView = () => {
  return (
    <main className="min-h-screen pb-20">
      {/* hero section */}
      <HeroSection
        title="Empowering Africa's Informal Sector through
							Technology and Innovation"
        description="Cred is a social equity tech startup commited to
							transforming informal workspaces across Africa."
      />

      {/* vision */}
      <VisionSection />

      {/* solution */}
      <SolutionsCards />

      {/* impact */}
      <ImpactSection />

      {/* Difference  */}
      <Difference />
    </main>
  );
};

export default HomePageView;
