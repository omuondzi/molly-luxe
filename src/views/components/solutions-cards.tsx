import { H2, H3, Paragraph, Subtitle, Subtitle2 } from "@components/typography";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
} from "@nextui-org/react";
import clsx from "clsx";
import { SOLUTIONS } from "data/solutions";
import { Link } from "react-router-dom";

const SolutionsCards = () => {
	return (
		<section className="container my-10 py-16 max-w-[950px]">
			<H2 className="text-center">
				Our <span className="italic">Solutions</span>
			</H2>

			<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 my-8">
				{SOLUTIONS.map((solution, index) => {
					const isMiddleCard = index % 2 !== 0 ? true : false;
					return (
						<Card
							shadow="none"
							className={clsx(
								"border-5 border-primary text-primary py-6 h-max",
								isMiddleCard && "bg-primary text-white pb-14"
							)}
							radius="none"
							key={solution.name}
						>
							<CardHeader className="">
								<H3 className="font-semibold  w-max mx-auto !text-center ">
									{solution.name}
								</H3>
							</CardHeader>
							<CardBody className="my-2 text-center xl:container">
								<Paragraph
									className={clsx(
										"!text-black",
										isMiddleCard && "!text-white"
									)}
								>
									{solution.tagline}
								</Paragraph>
							</CardBody>
							<CardFooter className="flex items-center justify-center">
								<Button
									as={Link}
									to={solution.path}		
									radius="none"
									color="primary"
									className={clsx(
										"px-8 py-8",
										isMiddleCard &&
											"border-4 border-grayish"
									)}
								>
									<Subtitle2 className={clsx("font-bold")}>
										Learn More
									</Subtitle2>
								</Button>
							</CardFooter>
						</Card>
					);
				})}
			</section>
		</section>
	);
};

export default SolutionsCards;
