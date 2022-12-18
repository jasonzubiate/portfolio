import React from "react";
import { useImmer } from "use-immer";
import Navbar from "./Navbar";

// Icons
import { CgMenuMotion } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Layout = ({ children }) => {
	const [navToggle, setNavToggle] = useImmer(false);

	return (
		<div>
			<main className={`${navToggle ? "shifted-main" : ""}`}>{children}</main>

			{/* button used to change the navToggle state */}
			<button
				id="nav-toggle"
				type="button"
				onClick={() => setNavToggle(!navToggle)}
			>
				<i className={`${!navToggle ? "open" : ""}`}>
					<CgMenuMotion size="3x" color="whitesmoke" />
				</i>
				<i className={`${navToggle ? "close" : ""}`}>
					<IoClose size="3x" color="whitesmoke" />
				</i>
			</button>

			{/* navbar with all navlinks for the different sections of the page */}
			<Navbar navToggle={navToggle} setNavToggle={setNavToggle} />
		</div>
	);
};

export default Layout;
