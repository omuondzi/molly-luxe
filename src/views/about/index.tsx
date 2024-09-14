import HeroSection from "@views/components/hero-section";
import VisionSection from "@views/components/vision-section";

const AboutPageView = () => {
  return (
    <main className="min-h-screen pb-20">
      {/* hero section */}
      <HeroSection
        title="ABOUT US"
        description="We are a non-profit organization dedicated to uplifting the lives of young boys and girls in Gem East in Rangwe, HomaBay County through STEM education, building homes for widows, and sponsoring the education of vulnerable children. Together, we are creating opportunities, empowering communities, and fostering hope for a brighter future.  "
      />
      {/* vision */}
      <VisionSection />
    </main>
  );
};

export default AboutPageView;
