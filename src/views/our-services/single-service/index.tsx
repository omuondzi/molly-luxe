import { H2, Subtitle, Paragraph, Subtitle2 } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Accordion, AccordionItem } from "@nextui-org/react";
import SolutionsHero from "@views/components/solutions-hero";
import { SOLUTION } from "data/solutions";

interface SingleServicePageViewProps {
	service: SOLUTION;
}

const SingleServicePageView = ({ service }: SingleServicePageViewProps) => {
	return (
		<main className="py-10">
			{/* hero */}
			<SolutionsHero
				intro={service.intro}
				name={service.name}
				tagline={service.tagline}
			/>

			{/* pointers */}

			{service.pointers && (
				<section className="py-16 container">
					<Accordion variant="light">
						{service.pointers?.map((pointer) => (
							<AccordionItem
								key={pointer.title}
								title={
									<Subtitle className="!text-[#585858] font-semibold">
										{pointer.title}
									</Subtitle>
								}
								className="border-3 p-4 border-primary mb-4"
								indicator={
									<Icon
										icon="ri:arrow-right-s-line"
										rotate={180}
										className="text-primary"
										fontSize={36}
									/>
								}
								aria-label={
									pointer.title + "Pointer Accordion Item"
								}
							>
								{pointer?.content.map((point) => (
									<Paragraph key={point}>{point}</Paragraph>
								))}
							</AccordionItem>
						))}
					</Accordion>
				</section>
			)}

			{/* grouped pointers */}

			{service.groupedPointers && (
				<section className="py-16 container">
					<Accordion variant="light">
						{service.groupedPointers?.map((pointer) => (
							<AccordionItem
								key={pointer.title}
								title={
									<Subtitle className="!text-[#585858] font-semibold">
										{pointer.title}
									</Subtitle>
								}
								subtitle={
									<Subtitle2 className="!text-[#a1a1a1]">
										{pointer?.subtitle}
									</Subtitle2>
								}
								className="border-3 p-4 border-primary mb-4"
								indicator={
									<Icon
										icon="ri:arrow-right-s-line"
										rotate={180}
										className="text-primary"
										fontSize={36}
									/>
								}
								aria-label={
									pointer.title + "Pointer Accordion Item"
								}
							>
								{pointer?.pointers.map((point) => (
									<section
										key={point.title}
										className="my-3 items-center flex gap-3"
									>
										<Icon
											icon="mdi:dot"
											className="text-black"
											fontSize={36}
										/>
										<Paragraph className="">
											{point.title} : {point.content[0]}
										</Paragraph>
									</section>
								))}
							</AccordionItem>
						))}
					</Accordion>
				</section>
			)}

			{/* key features and benefits */}

			{service.featuresBenefits && (
				<section className="py-16  container max-w-[800px]">
					<section className="bg-primary-50 mb-14 bg-joiningHands bg-center bg-cover bg-no-repeat w-[200px] h-[200px] rounded-full mx-auto" />
					<H2 className="text-center font-semibold">
						Key <i>Features</i> and <i>Benefits</i>
					</H2>
					<Paragraph className="!text-[#585858] text-center italic my-10">
						{service.featuresBenefits[0].subtitle}
					</Paragraph>
					{service.featuresBenefits?.map((pointer) => (
						<section
							key={pointer.title}
							className="my-3 flex gap-4 md:gap-10 container"
						>
							<section>
								<Icon
									icon="el:ok-sign"
									className="text-green-400 text-[20px] md:text-[40px] "
								/>
							</section>
							<Paragraph className="!text-[#585858]">
								{pointer.title} : {pointer.content}
							</Paragraph>
						</section>
					))}
				</section>
			)}
		</main>
	);
};

export default SingleServicePageView;
