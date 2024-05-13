import { NavLink } from "react-router-dom";

const NavItems = [
	{
		path: "/",
		label: "Home",
	},
	// {
	// 	path: "/services",
	// 	label: "Services",
	// },
	{
		path: "/contact",
		label: "Contact",
	},
];

const LandingNavbar = () => {
	return (
		<nav className="py-6 border-2">
			<section className="container flex justify-between items-center">
				<p>LandingNavbar</p>
				<section className="flex gap-3 items-center">
					{NavItems.map((item, idx) => (
						<NavLink
							key={idx}
							to={item.path}
							className={({ isActive }) =>
								isActive
									? "text-primary-default"
									: "text-default"
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
