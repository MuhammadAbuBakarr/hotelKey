import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
	return <>{window.innerWidth > 400 ? <DesktopNavbar /> : <MobileNavbar />}</>;
};

export default Navbar;
