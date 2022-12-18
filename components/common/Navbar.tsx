import styles from "styles/Navbar.module.scss";
import { useImmer } from "use-immer";

// HOOKS
import useWindowDimensions from "../../hooks/useWindowDimensions";

// COMPONENTS
import Navlink from "./NavLink";

// Images
import homePage from "public/img/homepg.png";
import aboutPage from "public/img/aboutpg.png";
import projectsPage from "public/img/projectspg.png";
import projectsPageMobile from "public/img/projectspgmbl.png";
import contactPage from "public/img/contactpg.png";
import contactPageMobile from "public/img/contactpgmbl.png";

type NavbarProps = {
	navToggle: boolean;
	setNavToggle: any;
};

const Navbar = ({ navToggle, setNavToggle }: NavbarProps) => {
	const { width, height } = useWindowDimensions();

	const [currentPage, setCurrentPage] = useImmer([
		{
			name: "Home",
			image: homePage,
			mobileImage: projectsPageMobile,
			selected: true,
		},
		{
			name: "About",
			image: aboutPage,
			mobileImage: projectsPageMobile,
			selected: false,
		},
		{
			name: "Projects",
			image: projectsPage,
			mobileImage: projectsPageMobile,
			selected: false,
		},
		{
			name: "Contact",
			image: contactPage,
			mobileImage: contactPageMobile,
			selected: false,
		},
	]);

	// renders all of the navlinks
	const renderNavLinks = currentPage.map((page) => {
		return (
			<Navlink
				linkName={page.name}
				linkImage={width > 640 ? page.image : page.mobileImage}
				setNavToggle={setNavToggle}
				selected={page.selected}
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
