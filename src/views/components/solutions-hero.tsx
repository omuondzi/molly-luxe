import { H2, H6, Paragraph } from "@components/typography";

interface SolutionsHeroProps {
	name: string;
	tagline?: string;
	intro: string;
}

const SolutionsHero = ({ intro, name, tagline }: SolutionsHeroProps) => {
	return (
		<section className="grid md:grid-cols-2 min-h-[30vh] bg-primary">
			<section className="container py-8 text-white">
				<section className="container md:!ml-auto md:!mr-0 flex flex-col h-full justify-center gap-3">
					<H2 className="uppercase leading-none">{name}</H2>
					<H6 className="font-semibold">{tagline}</H6>
					<Paragraph className="2xl:w-4/5">{intro}</Paragraph>
					<section className="bg-grayish mt-4 h-[12px] w-[120px]" />
				</section>
			</section>
			<section className="bg-primary-50 bg-joiningHands bg-cover bg-no-repeat bg-center min-h-[30vh] " />
		</section>
	);
};

export default SolutionsHero;
