import HeroSection from "@views/components/hero-section";
import VisionSection from "@views/components/vision-section";

const AboutPageView = () => {
	return (
		<main className="min-h-screen pb-20">
			{/* hero section */}
			<HeroSection />
			{/* vision */}
			<VisionSection />
		</main>
	);
};

export default AboutPageView;
