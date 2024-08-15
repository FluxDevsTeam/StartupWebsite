import { Outlet } from "react-router-dom";
import { useAppContext } from "../ContextProvider";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

function AppLayout() {
	const { theme } = useAppContext();
	return (
		<div
			className={`layout ${
				theme === "dark" ? "dark" : ""
			} h-screen relative`}>
			<Header />
			<MobileNav />
			<Outlet />
			<Footer />
		</div>
	);
}
export default AppLayout;
