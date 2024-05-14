import clsx from "clsx";
import { NavLink } from "react-router-dom";

const NavItems = [
	{
		path: "/dashboard",
		label: "Overview",
	},
	{
		path: "/dashboard/account",
		label: "Account",
	},
];

const DashboardSidebar = () => {
	return (
		<nav>
			<h4 className="font-bold text-3xl">Dashboard Sidebar</h4>

			<section className="h-[1px] mt-2 mb-4 bg-[#d4d4d4]" />

			<section className="flex  flex-col gap-1">
				{NavItems.map((item, idx) => (
					<NavLink
						key={idx}
						to={item.path}
						className={({ isActive }) =>
							clsx(
								"font-bold",
								isActive && "text-primary-default"
							)
						}
						end
					>
						{item.label}
					</NavLink>
				))}
			</section>
		</nav>
	);
};

export default DashboardSidebar;
