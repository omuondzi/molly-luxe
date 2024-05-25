import LandingLayout from "@layouts/landing";
import AboutPage from "@pages/about";
import ContactPage from "@pages/contact";
import CredfyPage from "@pages/credfy";
import CredLifePage from "@pages/credlife";

import HomePage from "@pages/home";
import NotFoundPage from "@pages/not-found";
import OurServicesPage from "@pages/our-services";
import SingleServicePage from "@pages/our-services/single-service";
import { useRoutes } from "react-router-dom";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <LandingLayout />,
			children: [
				{
					element: <HomePage />,
					index: true,
					path: "/",
				},
				// contact
				{
					path: "/contact-us",
					element: <ContactPage />,
				},
				//about
				{
					path: "/about-us",
					element: <AboutPage />,
				},
				//Our Services
				{
					path: "/our-services",
					element: <OurServicesPage />,
				},
				// Single Service
				{
					path: "/our-services/:id",
					element: <SingleServicePage />,
				},

				//credfy
				{
					path: "/credfy",
					element: <CredfyPage />,
				},
				//credlife
				{
					path: "/credlife",
					element: <CredLifePage />,
				},
			],
		},
		{
			path: "*",
			element: <NotFoundPage />,
		},
	]);

	return routes;
};

export default Router;
