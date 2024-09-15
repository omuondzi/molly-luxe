import LandingLayout from "@layouts/landing";
import AboutPage from "@pages/about";
import ContactPage from "@pages/contact";
import DonatePage from "@pages/donate";
import GetInvolvedPage from "@pages/get-involved";

import HomePage from "@pages/home";
import NotFoundPage from "@pages/not-found";
import OurProgramsPage from "@pages/our-programs";

import SocialImpactPage from "@pages/social-impact";
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

        // social-impact
        {
          path: "/social-impact",
          element: <SocialImpactPage />,
        },

        //our programs
        {
          path: "/our-programs",
          element: <OurProgramsPage />,
        },

        // get-involved
        {
          path: "/get-involved",
          element: <GetInvolvedPage />,
        },

        //donate
        {
          path: "/donate",
          element: <DonatePage />,
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
