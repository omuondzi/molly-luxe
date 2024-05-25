import ImpactSection from "./impact";
import Difference from "./difference";
import SolutionsCards from "@views/components/solutions-cards";
import HeroSection from "@views/components/hero-section";
import VisionSection from "@views/components/vision-section";

const HomePageView = () => {
	return (
		<main className="min-h-screen pb-20">
			{/* hero section */}
			<HeroSection />

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
