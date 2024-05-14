// import DashboardLayout from "@layouts/dashboard";
// import LandingLayout from "@layouts/landing";
// import ContactPage from "@pages/contact";
// import AccountPage from "@pages/dashboard/account";
// import OverviewPage from "@pages/dashboard/overview";
// import HomePage from "@pages/home";

import DashboardLayout from "@layouts/dashboard";
import LandingLayout from "@layouts/landing";
import ContactPage from "@pages/contact";
import ContactBusinessPage from "@pages/contact/business";
import ContactProfessionalPage from "@pages/contact/professional";
import AccountPage from "@pages/dashboard/account";
import OverviewPage from "@pages/dashboard/overview";
import HomePage from "@pages/home";
import NotFoundPage from "@pages/not-found";
import { useRoutes } from "react-router-dom";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/dashboard",
			element: <DashboardLayout />,
			children: [
				{
					element: <OverviewPage />,
					index: true,
				},
				{
					element: <AccountPage />,
					path: "account",
				},
			],
		},

		// home
		{
			path: "/",
			element: <LandingLayout />,
			children: [
				{
					element: <HomePage />,
					index: true,
				},
				// contact
				{
					path: "/contact",
					element: <ContactPage />,
					children: [
						// business
						{
							path: "/contact/business",
							element: <ContactBusinessPage />,
						},
						// professional
						{
							path: "/contact/professional",
							element: <ContactProfessionalPage />,
						},
					],
				},
			],
		},

		// not found page
		{
			path: "*",
			element: <NotFoundPage />,
		},
	]);

	return routes;
};

export default Router;
