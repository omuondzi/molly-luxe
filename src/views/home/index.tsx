import HeroSection from "@views/components/hero-section";

const HomePageView = () => {
  return (
    <main className="min-h-screen pb-20">
      {/* hero section */}
      <HeroSection
        title="Molly Luxe"
        description="Shop with us"
        background="/images/home-hero.jpg"
      />
    </main>
  );
};

export default HomePageView;
