import { H2, Paragraph } from "@components/typography";

const MissionCard = () => {
	return (
		<section className="container  bg-grayish text-center py-10 lg:py-20 px-5 md:px-8 lg:px-10 -mt-20 mb-16 z-[999]">
			<H2>
				Our <span className="italic">Mission</span> Is Clear
			</H2>
			<Paragraph className="max-w-[900px] mt-5 mx-auto">
				To close equity gaps in wealth, education, and accessibility by
				leveraging technology to drive social and financial inclusion
				for millions. We aim to shape the future of work in Africa,
				ensuring sustainable economic growth and meaningful social
				change.
			</Paragraph>
		</section>
	);
};

export default MissionCard;
