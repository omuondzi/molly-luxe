import { H2, Paragraph, Subtitle } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import SolutionsHero from "@views/components/solutions-hero";
import { GETINVOLVED } from "data/get-involved";
import { useState } from "react";

const GetInvolvedPageView = () => {
	const [activeStakeholder, setActiveStakeholder] = useState<number>(0);

	return (
		<main className="py-10">
			{/* hero */}
			<SolutionsHero intro={GETINVOLVED.intro} name={GETINVOLVED.name} />

			{/* taglines */}
			<section className="container pt-20 ">
				{GETINVOLVED.taglines.map((tagline) => (
					<H2 key={tagline} className="leading-[1]">
						{tagline}
					</H2>
				))}
				<Paragraph className="text-[#585858] max-w-[700px] text-justify italic my-10">
					{GETINVOLVED.subtitle}
				</Paragraph>
			</section>

			{/* stakeholders */}
			<section className="flex flex-col lg:flex-row container gap-5">
				<section className="flex flex-col gap-3">
					{GETINVOLVED.stakeholders.map((stakeholder, idx) => (
						<Button
							key={idx}
							variant="bordered"
							color="primary"
							className=" border-4 border-primary text-2xl font-semibold px-10 py-6"
							radius="none"
							onClick={() => setActiveStakeholder(idx)}
						>
							{stakeholder.name}
						</Button>
					))}
				</section>
				<section className="border-4 border-primary flex-1 p-4 md:p-10">
					<Subtitle className="font-bold !text-black-600">
						{GETINVOLVED.stakeholders[activeStakeholder].name}
					</Subtitle>
					<Paragraph className="italic mt-6 text-[#585858]">
						{
							GETINVOLVED.stakeholders[activeStakeholder]
								.description
						}
					</Paragraph>
					<section className="mt-8">
						{GETINVOLVED.stakeholders[
							activeStakeholder
						].involvement.map((item) => (
							<section
								key={item.title}
								className="my-3 flex gap-4 md:gap-10 text-start "
							>
								<section>
									<Icon
										icon="el:ok-sign"
										className="text-[#00ff40] text-[20px] md:text-[32px] "
									/>
								</section>
								<Paragraph className="!text-[#585858]">
									<b>{item.title}</b> : {item.content}
								</Paragraph>
							</section>
						))}
					</section>
				</section>
			</section>
		</main>
	);
};

export default GetInvolvedPageView;
