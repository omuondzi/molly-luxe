import { Outlet } from "react-router-dom";

import LandingNavbar from "./navbar";

const LandingLayout = () => {
	return (
		<section>
			{/* navbar */}
			<LandingNavbar />

			{/* content */}

			<Outlet />

			{/* footer */}
		</section>
	);
};

export default LandingLayout;
