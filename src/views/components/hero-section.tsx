import { H1, Subtitle2 } from "@components/typography";
import { Button } from "@nextui-org/react";
import clsx from "clsx";

import MissionCard from "./mission-card";
import { Link } from "react-router-dom";

interface HeroSectionProps{
	title:string,
	description:string
}

const HeroSection = ({description,title}:HeroSectionProps) => {
	
	return (
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
							{title}
						</H1>
						<Subtitle2 className="md:w-2/3 lg:w-1/2 md:mx-auto">
							{description}
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
				<MissionCard />
			</section>
		</section>
	);
};

export default HeroSection;
