import React from "react";
import styles from "styles/Navbar.module.scss";

// Components
import Navlink from "./NavLink";

type NavbarProps = {
	navToggle: boolean;
	setNavToggle: any;
	currentPage: any;
	setCurrentPage: any;
};

const Navbar = ({
	navToggle,
	setNavToggle,
	currentPage,
	setCurrentPage,
}: NavbarProps) => {
	// renders all of the navlinks
	// check the width of the window to determine which linkimage to send
	const renderNavLinks = currentPage.map((page) => {
		return (
			<Navlink
				linkName={page.name}
				linkImage={page.image}
				setNavToggle={setNavToggle}
				selected={page.value}
				setCurrentPage={setCurrentPage}
			/>
		);
	});
	return (
		<nav id="nav">
			<div
				id="nav-links"
				className={`${
					navToggle
						? styles["shifted-nav-links"]
						: styles["unshifted-nav-links"]
				}`}
			>
				{renderNavLinks}
			</div>
		</nav>
	);
};

export default Navbar;
