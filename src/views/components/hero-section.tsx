import { H1, Subtitle2 } from "@components/typography";
import { Button } from "@nextui-org/react";

import MissionCard from "./mission-card";
import { Link } from "react-router-dom";

const HeroSection = () => {
	return (
		<section>
			<section className="min-h-[60vh] lg:min-h-[80vh]  flex items-center justify-center flex-col text-center bg-heroImage bg-center bg-cover bg-blend-multiply  bg-black-600">
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
							as={Link}
							to="/social-impact"
						>
							Learn More
						</Button>
					</section>
				</section>
			</section>
			<MissionCard />
		</section>
	);
};

export default HeroSection;
