import { Outlet } from "react-router-dom";

import LandingNavbar from "./navbar";

import "../styles.css";
import LandingFooter from "./footer";

const LandingLayout = () => {
	return (
		<section>
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
