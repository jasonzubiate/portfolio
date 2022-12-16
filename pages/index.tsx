import Head from "next/head";
import { useImmer } from "use-immer";

// Icons
import { CgMenuMotion } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

// Components
import Main from "../components/page/Main";
import About from "../components/page/About";
import Projects from "../components/page/Projects";
import Contact from "../components/page/Contact";
import Navbar from "../components/common/Navbar";

// Images
import homePage from "public/img/homepg.png";
import aboutPage from "public/img/aboutpg.png";
import projectsPage from "public/img/projectspg.png";
import projectsPageMobile from "public/img/projectspgmbl.png";
import contactPage from "public/img/contactpg.png";
import contactPageMobile from "public/img/contactpgmbl.png";

export default function Home() {
	const [navToggle, setNavToggle] = useImmer(false);

	// state for all of the pages
	const [currentPage, setCurrentPage] = useImmer([
		{
			name: "Home",
			image: homePage,
			mobileImage: projectsPageMobile,
			value: true,
		},
		{
			name: "About",
			image: aboutPage,
			mobileImage: projectsPageMobile,
			value: false,
		},
		{
			name: "Projects",
			image: projectsPage,
			mobileImage: projectsPageMobile,
			value: false,
		},
		{
			name: "Contact",
			image: contactPage,
			mobileImage: contactPageMobile,
			value: false,
		},
	]);

	// determines which page will render based on the currentPage state
	const renderPage = currentPage.map((page) => {
		if (page.name === "Home" && page.value == true) {
			return <Main />;
		}
		if (page.name === "About" && page.value == true) {
			return <About />;
		}
		if (page.name === "Projects" && page.value == true) {
			return <Projects />;
		}
		if (page.name === "Contact" && page.value == true) {
			return <Contact />;
		}
	});

	return (
		<div>
			<Head>
				<title>Jason Zubiate | Frontend Developer</title>
				<meta name="description" content="Jason Zubiate's Portfolio" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="public/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="public/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<main className={`${navToggle ? "shifted-main" : ""}`}>{renderPage}</main>

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
			<Navbar
				navToggle={navToggle}
				setNavToggle={setNavToggle}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}
