import { H3, Paragraph, Subtitle, Subtitle2 } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import SolutionsHero from "@views/components/solutions-hero";
import { SOCIALIMPACT } from "data/social-impact";

const SocialImpactPageView = () => {
	return (
		<main className="py-10">
			{/* hero */}
			<SolutionsHero
				intro={SOCIALIMPACT.intro}
				name={SOCIALIMPACT.name}
			/>

			{/* our ways */}
			<section className="container py-20">
				<Subtitle2 className="text-center my-14 font-semibold text-[#585858]">
					{SOCIALIMPACT.waysTitle}
				</Subtitle2>
				<Accordion>
					{SOCIALIMPACT.ways.map((way) => (
						<AccordionItem
							title={
								<Subtitle className="!text-[#585858] font-semibold">
									{way.name}
								</Subtitle>
							}
							key={way.name}
							indicator={
								<Icon
									icon="ri:arrow-right-s-line"
									rotate={180}
									className="text-primary"
									fontSize={36}
								/>
							}
							className="border-3 p-4 border-primary mb-4"
							aria-label={way.name + "Ways Accordion Item"}
						>
							{way.categories.map((category) => (
								<section>
									<Subtitle2 className="text-[#585858] font-semibold">
										{category.title}
									</Subtitle2>
									{category?.content.map((cont) => (
										<section
											key={cont.title}
											className="my-3 items-center flex gap-3"
										>
											<Icon
												icon="mdi:dot"
												className="text-black"
												fontSize={36}
											/>
											<Paragraph className="">
												<i>{cont.title}</i> :{" "}
												{cont.description}
											</Paragraph>
										</section>
									))}
								</section>
							))}
						</AccordionItem>
					))}
				</Accordion>
			</section>

			{/* measure impact */}
			<section className="container py-20  text-center max-w-[800px]">
				<H3 className="font-semibold">{SOCIALIMPACT.impact.title}</H3>
				<Subtitle2 className="text-[#585858] my-4">
					{SOCIALIMPACT.impact.intro}
				</Subtitle2>
				{SOCIALIMPACT.impact.measurements.map((measurement) => (
					<section
						key={measurement.title}
						className="my-3 flex gap-4 md:gap-10 text-start container"
					>
						<section className="">
							<Icon
								icon="el:ok-sign"
								className="text-[#00ff40] text-[20px] md:!text-[32px] "
							/>
						</section>
						<Subtitle2 className="!text-[#585858]">
							<b>{measurement.title}</b> : {measurement.content}
						</Subtitle2>
					</section>
				))}
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
		</main>
	);
};

export default SocialImpactPageView;
