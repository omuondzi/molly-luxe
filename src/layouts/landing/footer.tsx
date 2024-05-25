import CredLogo from "@components/logo";
import { H3, Subtitle, Subtitle2 } from "@components/typography";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Divider, Link } from "@nextui-org/react";

const LandingFooter = () => {
	return (
		<footer className="">
			<Divider className="mb-20 h-1 bg-grayish" />
			<section className="grid md:grid-cols-2 gap-6">
				<section className="container">
					<CredLogo />
				</section>
				<section />
				<section className="bg-primary py-20">
					<section className="text-white container  h-full">
						<H3 className="font-semibold">Contacts</H3>
						<section className="grid gap2 my-4">
							<Subtitle2>
								<b>Email </b> <i>:info@cred.afrca</i>{" "}
							</Subtitle2>
							<Subtitle2>
								<b>Phone </b> <i>:+25412345677</i>
							</Subtitle2>
							<Subtitle2>
								<b> Address</b> <i>:1102 Applewood Adams</i>
							</Subtitle2>
						</section>
					</section>
				</section>
				<section className="flex container py-8 md:py-0 items-end flex-col text-end">
					<Subtitle className="text-[#585858] font-semibold">
						Have questions or want to learn more?{" "}
						<Link className="italic" underline="always">
							Reach out to us!
						</Link>
					</Subtitle>
					<section className="flex my-4">
						<Icon
							icon="typcn:social-instagram"
							className="text-primary"
						/>
						<Icon
							icon="ant-design:facebook-filled"
							className="text-primary"
						/>
					</section>
					<Subtitle2 className="text-[#585858] font-medium">
						Copyright &copy;{" "}
						{new Date().toLocaleDateString("en-us", {
							year: "numeric",
						})}{" "}
						Cred Africa
					</Subtitle2>
				</section>
			</section>
		</footer>
	);
};

export default LandingFooter;
