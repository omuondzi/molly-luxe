import { Outlet } from "react-router-dom";

import LandingNavbar from "./navbar";

import LandingFooter from "./footer";

const LandingLayout = () => {
  return (
    <section className="bg-secondary">
      {/* navbar */}
      <LandingNavbar />

      {/* content */}

      <Outlet />

      {/* footer */}
      <LandingFooter />
    </section>
  );
};

export default LandingLayout;
