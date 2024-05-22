import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import CredLogo from "@components/logo";
import { NavItems } from "./config";
import { useState } from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const LandingNavbar = () => {
	const [shouldShowSidebar, setShowSidebar] = useState<boolean>(false);

	const updateDrawer = () => setShowSidebar((prev) => !prev);

	return (
		<nav className="py-6 ">
			<section className="container flex justify-between lg:justify-between items-center gap-10">
				<CredLogo />

				<section className="lg:hidden">
					<Icon
						icon="ci:hamburger-lg"
						className="text-primary"
						fontSize={40}
						onClick={updateDrawer}
					/>
				</section>

				<section className="hidden basis-4/5 lg:block ">
					<NavItemsWrapper />
				</section>
			</section>
			<Drawer
				onClose={() => setShowSidebar(false)}
				direction="left"
				open={shouldShowSidebar}
				size={300}
			>
				<section className="px-3 mt-6  flex flex-col gap-2">
					<NavItemsWrapper updateDrawer={updateDrawer} />
				</section>
			</Drawer>
		</nav>
	);
};

export default LandingNavbar;

interface NavItemsWrapperProps {
	updateDrawer?: () => void;
}

const NavItemsWrapper = ({ updateDrawer }: NavItemsWrapperProps) => (
	<section className="flex flex-col lg:flex-row justify-between  lg:items-center  gap-3 lg:gap-5">
		{NavItems.map((item, idx) => (
			<NavLink
				key={idx}
				to={item.path}
				className={({ isActive }) =>
					clsx(
						"text-lg text-primary font-semibold",
						isActive && "underline"
					)
				}
				onClick={() => updateDrawer && updateDrawer()}
				end
			>
				{item.label}
			</NavLink>
		))}

		<Button
			radius="none"
			color="primary"
			className="h-full py-6 px-10"
			size="lg"
			onClick={() => updateDrawer && updateDrawer()}
		>
			Get Involved
		</Button>
	</section>
);
