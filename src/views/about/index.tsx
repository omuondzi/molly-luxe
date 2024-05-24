import MissionCardAbout from "@views/about/mission-card-about"
import VisionSectionAbout from "./vision-section-about"
import { Button } from "@nextui-org/react"
import { H1, Subtitle2 } from "@components/typography"
import clsx from "clsx"
import Footer from "@views/home/footer"


const AboutPageView = () => {
    return ( 
        <>
        <main className="min-h-screen pb-20">
			{/* hero section */}
			<section
				className={clsx(
					"min-h-[132vh] md:min-h-[114vh] lg:min-h-[125vh]  !mb-10",
					innerHeight < 800 && innerWidth < 450 && "!min-h-[150vh]",
					innerHeight < 700 && innerHeight < 400 && "!mb-40"
				)}
			>
				<section className="h-[90vh] relative flex items-center justify-center flex-col text-center bg-heroImage bg-center bg-cover bg-blend-multiply  bg-black-600">
					<section className="container">
						<section className="md:container flex flex-col gap-5 ">
							<H1 className="text-grayish ">
								ABOUT US
							</H1>
							<Subtitle2 className="md:w-2/3 lg:w-1/2 md:mx-auto">
								Cred is a social equity tech startup committed to closing equity gaps in wealth,education and accessibility by leveraging technology to drive social and financial inclusion for millions. Our mission is to shape the future of work in Africa.
							</Subtitle2>
							<Button
								size="lg"
								color="primary"
								radius="none"
								className="self-center px-16 py-8"
							>
								Learn More
							</Button>
						</section>
					</section>
					<MissionCardAbout />
				</section>
			</section>
			{/* vision */}
			<VisionSectionAbout />
                </main>

                {/* Footer  */}
                <Footer />

                </>
     );
}
 
export default AboutPageView;