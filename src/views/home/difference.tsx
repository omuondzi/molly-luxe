import { H2, Paragraph, Subtitle2 } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";

const Difference = () => {
	const points = [
		{
			name: "For gig workers, we offer the tools and suppport needed to build better lives.",
		},
		{
			name: "For funders and partners , investing in Cred means contributing to a more inclusive and resilient society.",
		},
	];
	return (
		<section className="container max-w-[600px] py-36 text-center">
			<section className="bg-primary-50 mb-14 bg-joiningHands bg-center bg-cover bg-no-repeat w-[200px] h-[200px] rounded-full mx-auto" />

			<H2 className="mb-4">
				Join Us in <i>Making a Difference</i>
			</H2>
			<Subtitle2 className="text-[#585858] mb-10">
				Cred is transforming the informal sector inAfrica by creating
				apportunities , ensuring fair treatment , and fostering
				sustainable growth
			</Subtitle2>

			<section className="grid gap-2">
				{points.map((point, index) => (
					<section className="flex gap-4 text-start" key={index}>
						<section>
							<Icon
								icon="el:ok-sign"
								className="text-green-400 text-[20px] md:text-[40px] "
							/>
						</section>
						<Paragraph className="text-[#585858]">
							{point.name}
						</Paragraph>
					</section>
				))}
			</section>

			<section className="flex items-center justify-center mt-16">
				<Button
					radius="none"
					variant="bordered"
					color="primary"
					className=" border-4 border-primary text-2xl font-semibold px-10 py-6"
				>
					Get Invoved
				</Button>
			</section>
		</section>
	);
};

export default Difference;
