import { SOLUTIONS } from "data/solutions";

export const NavItems = [
	{
		path: "/",
		label: "Home",
	},
	{
		path: "/about-us",
		label: "About Us",
	},
	{
		path: "/our-services",
		label: "Our Services",
		children: SOLUTIONS.map((solution) => ({
			name: solution.name,
			href: solution.path,
		})),
	},
	{
		path: "/social-impact",
		label: "Social Impact",
	},
	{
		path: "/contact-us",
		label: "Contact Us",
	},
];

export const SocialLinks = [
	{
		platform: "Instagram",
		link: "https://www.instagram.com/theband.co.ke/?igsh=MXYxa29mcmFlY3p6OQ%3D%3D",
		icon: "mdi:instagram",
	},
	{
		platform: "LinkedIn",
		link: "https://www.linkedin.com/company/thebandke/",
		icon: "mdi:linkedin",
	},
	{
		platform: "Email",
		link: "mailto:info@theband.co.ke",
		icon: "mdi:email-outline",
		mode: "self",
	},
	{
		platform: "Phone",
		link: "tel:+254115767696",
		icon: "mdi:phone",
		mode: "self",
	},
];
