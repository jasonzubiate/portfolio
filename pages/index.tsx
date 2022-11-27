import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/common/Navbar";
import { CgMenuMotion } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export default function Home() {
	const [navToggle, setNavToggle] = useState(false);
	console.log(navToggle);

	return (
		<div>
			<Head>
				<title>Jason Zubiate | Frontend Developer</title>
				<meta name="description" content="Jason Zubiate's Portfolio" />
				<link rel="icon" href="/public/img/logo.png" />
			</Head>
			<main className={`${navToggle ? "shifted-main" : ""}`}>
				<Navbar />
				<h1 className="centered" id="name">
					Jason Zubiate
				</h1>
				<h2 id="profession">Frontend Developer</h2>
				<button
					id="nav-toggle"
					type="button"
					onClick={() => setNavToggle(!navToggle)}
				>
					<i className={`${!navToggle ? "open" : ""}`}>
						<CgMenuMotion size="3x" color="#252525" />
					</i>
					<i className={`${navToggle ? "close" : ""}`}>
						<IoClose size="3x" color="#252525" />
					</i>
				</button>
			</main>
			A
		</div>
	);
}
