import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
	return (
		<nav className="flex justify-between py-2 items-center font-mono text-lg">
			<h1 className="ml-4 text-lg text-white">Company Name</h1>
			<RxHamburgerMenu className="text-white size-7 mr-4 hover:text-brownColor cursor-pointer"/>
		</nav>
	);
};

export default Nav;
