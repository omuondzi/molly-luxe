import HeroSection from "@views/components/hero-section";
import VisionSection from "@views/components/vision-section";

const AboutPageView = () => {
	return (
		<main className="min-h-screen pb-20">
			{/* hero section */}
			<HeroSection title="ABOUT US" description="Cred is a social equity tech startup committed to closing equity gaps in wealth, education, and accessibility by leveraging technology to drive social and financial inclusion for millions. Our mission is to shape the future of work in Africa" />
			{/* vision */}
			<VisionSection />
		</main>
	);
};

export default AboutPageView;
