import { H2, Paragraph } from "@components/typography";
import { Divider } from "@nextui-org/react";

const VisionSectionAbout = () => {
    return (
		<section className="flex flex-col md:flex-row container gap-14">
			<section className="md:w-[120px] leading-10">
				<H2 className="text-black-400 ">Our Vision</H2>
				<Divider className="bg-primary h-4 w-1/4 md:w-3/5 md:mt-6" />
			</section>
			<section className="xl:basis-4/5">
				<Paragraph>
					At Cred, we envision an Africa where every individual,
					regardless of their socio-economc background, has access to
					quality jobs, safe workspaces, resilient livelihoods
					financial services, and educational opportunities.
				</Paragraph>
				<Paragraph className="mt-6 italic">
					<q>
						We strive to create a more equitable and inclusive
						society through innovative solutions tailored to the
						unique challenges of the informal sector.
					</q>
				</Paragraph>
			</section>
		</section>
	);
}
 
export default VisionSectionAbout;