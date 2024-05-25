import { Link, NavLink, useNavigate } from "react-router-dom";
import clsx from "clsx";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
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
						className="text-primary cursor-pointer"
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

const NavItemsWrapper = ({ updateDrawer }: NavItemsWrapperProps) => {
	const navigate = useNavigate();

	return (
		<section className="flex flex-col lg:flex-row justify-between  lg:items-center  gap-3 xl:gap-5">
			{NavItems.map((item, idx) => {
				if (item.children) {
					return (
						<Dropdown
							key={item.label}
							radius="sm"
							className="bg-white border-2  text-primary"
							type="listbox"
							showArrow
							classNames={{
								base: "!overflow-auto rounded  !h-[400px] thin-scrollbar ",
							}}
						>
							<DropdownTrigger>
								<section className="flex items-center gap-1 cursor-pointer  text-primary font-semibold">
									<p className="text-sm xl:text-lg ">
										{item.label}
									</p>
									<Icon icon="ion:caret-down-outline" />
								</section>
							</DropdownTrigger>
							<DropdownMenu
								aria-label="Dynamic Menu"
								items={item.children}
								color="primary"
								// variant="bordered"
							>
								{(child) => (
									<DropdownItem
										aria-label={"Dynamic Menu" + child.name}
										key={child.name}
										className="font-medium "
										showDivider
										onClick={() => {
											navigate(child.href);
											updateDrawer && updateDrawer();
										}}
									>
										<p className="text-sm xl:text-lg font-medium ">
											{child.name}
										</p>
									</DropdownItem>
								)}
							</DropdownMenu>
						</Dropdown>
					);
				}

				return (
					<NavLink
						key={idx}
						to={item.path}
						className={({ isActive }) =>
							clsx(
								"text-sm xl:text-lg text-primary font-semibold",
								isActive && "underline"
							)
						}
						onClick={() => updateDrawer && updateDrawer()}
						end
					>
						{item.label}
					</NavLink>
				);
			})}

			<Button
				radius="none"
				color="primary"
				className="h-full py-6 px-10"
				size="lg"
				onClick={() => updateDrawer && updateDrawer()}
				as={Link}
				to="/get-involved"
			>
				Get Involved
			</Button>
		</section>
	);
};
