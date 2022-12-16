import React, { useEffect, useState } from "react";
import styles from "styles/Navbar.module.scss";

// HOOKS
import useWindowDimensions from "../../hooks/useWindowDimensions";

// COMPONENTS
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
	const {width, height} = useWindowDimensions();

	// renders all of the navlinks
	const renderNavLinks = currentPage.map((page) => {
		return (
			<Navlink
				linkName={page.name}
				linkImage={width > 640 ? page.image : page.mobileImage}
				setNavToggle={setNavToggle}
				selected={page.value}
				setCurrentPage={setCurrentPage}
			/>
		);
	});
	return (
		<nav id={styles.nav}>
			<div
				id={styles["nav-links"]}
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
