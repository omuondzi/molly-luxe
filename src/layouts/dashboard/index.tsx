import { Outlet } from "react-router-dom";
import DashboardSidebar from "./sidebar";

const DashboardLayout = () => {
	// side by side rendering
	// className="grid grid-cols-6 h-screen overflow-hidden"
	// className="py-10 px-4 col-span-5"
	return (
		<main className="h-screen overflow-hidden grid grid-cols-6">
			{/* <main className=" dashboard-layout-wrapper-grid"> */}
			{/* <main className="h-screen overflow-hidden flex"> */}
			{/* sidebar */}
			<section className="p-2 border-r-[2px]">
				{/* <section className="dashboard-layout-sidebar-grid"> */}
				{/* <section className="p-2 border-r-[2px]"> */}
				{/* <p>side bar</p> */}
				<DashboardSidebar />
				{/* <p>300px</p> */}
			</section>
			{/* content */}
			<section className="p-2 col-span-5">
				{/* <section className="dashboard-layout-content-grid"> */}
				{/* <section className="p-2 flex-1"> */}
				{/* <p>content section</p>
				<p>flex:1</p> */}
				<Outlet />
			</section>
		</main>
	);
};

export default DashboardLayout;
