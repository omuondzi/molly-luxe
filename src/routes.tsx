import LandingLayout from "@layouts/landing";
import ContactPage from "@pages/contact";
import HomePage from "@pages/home";
import { useRoutes } from "react-router-dom";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <LandingLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "/contact",
					element: <ContactPage />,
				},
			],
		},
	]);

	return routes;
};

export default Router;
