import Head from "next/head";

// Components
import Main from "../components/page/Main";

export default function Home() {
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

			<main>
				<Main />
			</main>
		</div>
	);
}
