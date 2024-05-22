import { H1, Subtitle2 } from "@components/typography";
import { Button } from "@nextui-org/react";
import MissionCard from "./mission-card";
import VisionSection from "./vision-section";
import clsx from "clsx";

const HomePageView = () => {
	return (
		<main className="min-h-screen pb-20">
			{/* hero section */}
			<section
				className={clsx(
					"min-h-[132vh] md:min-h-[114vh] lg:min-h-[125vh]  !mb-10",
					innerHeight < 800 && innerWidth < 450 && "!min-h-[150vh]",
					innerHeight < 700 && innerHeight < 400 && "!mb-40"
				)}
			>
				<section className="h-[90vh] relative flex items-center justify-center flex-col text-center bg-heroImage bg-center bg-cover bg-blend-multiply  bg-black-600">
					<section className="container">
						<section className="md:container flex flex-col gap-5 ">
							<H1 className="text-grayish ">
								Empowering Africa's Informal Sector through
								Technology and Innovation
							</H1>
							<Subtitle2 className="md:w-2/3 lg:w-1/2 md:mx-auto">
								Cred is a social equity tech startup commited to
								transforming informal workspaces across Africa.
							</Subtitle2>
							<Button
								size="lg"
								color="primary"
								radius="none"
								className="self-center px-16 py-8"
							>
								Learn More
							</Button>
						</section>
					</section>
					<MissionCard />
				</section>
			</section>
			{/* vision */}
			<VisionSection />
		</main>
	);
};

export default HomePageView;
