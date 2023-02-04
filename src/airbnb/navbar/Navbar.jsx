import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
	return (
		<>
			<div className="hidden sm:block">
				<DesktopNavbar />
			</div>
			<div className="sm:hidden">
				<MobileNavbar />
			</div>
		</>
	);
};

export default Navbar;
