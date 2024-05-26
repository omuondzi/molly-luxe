import { H2, Paragraph, Subtitle } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "@nextui-org/react";

import { SOCIALIMPACT } from "data/social-impact";
import { Link as RouterLink } from "react-router-dom";

const ImpactSection = () => {
	return (
		<section className="bg-primary py-24 text-center text-white">
			<section className="container max-w-[950px]">
				<section className="bg-primary-50 mb-14 bg-joiningHands bg-center bg-cover bg-no-repeat w-[200px] h-[200px] rounded-full mx-auto" />

				<H2>
					The <i>Impact</i>
				</H2>
				<Paragraph className="max-w-[600px] mt-4 mb-10 mx-auto">
					At Cred, our mission is to drive transformative change in
					Africa's informal sector.Here's how we create value for
					individials and society as a whole.
				</Paragraph>

				<section className="flex flex-col">
					{SOCIALIMPACT.ways.map((impact) => (
						<RouterLink
							key={impact.name}
							className="text-white"
							to="/social-impact"
						>
							<section className="flex w-full justify-between items-center px-8 border-4 my-4 py-6">
								<Subtitle className="font-semibold text-start">
									{impact.name}
								</Subtitle>

								<Icon
									className="text-white"
									icon="ep:arrow-right-bold"
								/>
							</section>
						</RouterLink>
					))}
				</section>
				<Link
					href="/social-impact"
					target="_blank"
					size="lg"
					underline="always"
					className="text-[#ffde59] mt-8 font-semibold"
				>
					Learn More On How We Measure Our Impact{" "}
				</Link>
			</section>
		</section>
	);
};

export default ImpactSection;
