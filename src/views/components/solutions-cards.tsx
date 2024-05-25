import { H2, H3, Subtitle } from "@components/typography";
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
		<section className="container my-10 py-16">
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
								"border-5 border-primary text-primary py-10 h-max",
								isMiddleCard && "bg-primary text-white pb-20"
							)}
							radius="none"
							key={solution.name}
						>
							<CardHeader className="">
								<H3 className="font-semibold  w-max mx-auto !text-center !text-4xl xl:!text-5xl 2xl:!text-6xl">
									{solution.name}
								</H3>
							</CardHeader>
							<CardBody className="my-4 lg:my-6 text-center xl:container">
								<Subtitle
									className={clsx(
										"!text-black",
										isMiddleCard && "!text-white"
									)}
								>
									{solution.tagline}
								</Subtitle>
							</CardBody>
							<CardFooter className="flex items-center justify-center">
								<Button
									as={Link}
									to={solution.path}
									size="lg"
									radius="none"
									color="primary"
									className={clsx(
										"px-8 py-8",
										isMiddleCard &&
											"border-4 border-grayish"
									)}
								>
									<Subtitle className={clsx("font-bold")}>
										Learn More
									</Subtitle>
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
