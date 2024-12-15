import HeroSection from "@views/components/hero-section";

const AboutPageView = () => {
  return (
    <main className="min-h-screen pb-20">
      {/* hero section */}
      <HeroSection
        title="Molly Luxe"
        description="About Us"
        background={"/images/thrift-stores.jpg"}
      />
    </main>
  );
};

export default AboutPageView;
