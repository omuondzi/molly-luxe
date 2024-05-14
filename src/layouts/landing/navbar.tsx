import { NavLink } from "react-router-dom";
import clsx from "clsx";

const NavItems = [
	{
		path: "/",
		label: "Home",
	},
	{
		path: "/contact",
		label: "Contact",
	},
	{
		path: "/dashboard",
		label: "Dashboard",
	},
];

const LandingNavbar = () => {
	return (
		// padding: 1.5rem 0; border: 0.5rem solid;
		<nav className="py-6 border-2">
			{/* display:flex; justify-content: space-between; align-items:center */}
			<section className="container flex justify-between items-center">
				<p>LandingNavbar</p>
				{/* display : flex; gap:0.75rem ; align-items:center */}
				<section className="flex gap-3 items-center">
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
						>
							{item.label}
						</NavLink>
					))}
				</section>
			</section>
		</nav>
	);
};

export default LandingNavbar;
