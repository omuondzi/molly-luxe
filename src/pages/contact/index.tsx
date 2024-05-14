import { NavLink, Outlet } from "react-router-dom";

const ContactPage = () => {
	return (
		<main className="min-h-screen">
			<section className="container min-h-[70vh] py-10 ">
				<h4 className="font-bold text-3xl mb-4">Contact Page</h4>
				<nav className="contact-navlinks-wrapper">
					<NavLink to="/contact/professional">Professional</NavLink>
					<NavLink to="/contact/business">Business</NavLink>
				</nav>

				<section className="bg-[#f5f5f5] mt-4 p-4 rounded-lg shadow-lg">
					<h5 className="font-semibold">Content</h5>
					{/* our children pages should render here */}
					<Outlet />
				</section>
			</section>
		</main>
	);
};

export default ContactPage;
