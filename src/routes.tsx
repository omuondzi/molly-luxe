import LandingLayout from "@layouts/landing";
import ContactPage from "@pages/contact";

import HomePage from "@pages/home";
import NotFoundPage from "@pages/not-found";
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
					path: "/contact",
					element: <ContactPage />,
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
