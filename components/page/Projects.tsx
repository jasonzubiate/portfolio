import React from "react";
import styles from "styles/Projects.module.scss";
import ProjectCard from "../common/ProjectCard";
import hyfeProjectCardImage from "public/img/hyfeProjectCardImage.png";
import hyfeProjectImage from "public/img/hyfeProjectImage.png";
import spotifyProjectCardImage from "public/img/spotifyProjectCardImage.png";
import awProjectCardImage from "public/img/awProjectCardImage.png";
import awProjectImage from "public/img/awProjectImage.png";
import uxProjectCardImage from "public/img/uxProjectCardImage.png";
import blockchainProjectCardImage from "public/img/blockchainProjectCardImage.png";
import blockchainProjectImage from "public/img/blockchainProjectImage.png";
import nutripairProjectCardImage from "public/img/nutripairProjectCardImage.png";
import nutripairProjectImage from 'public/img/nutripairProjectImage.png'
import { useImmer } from "use-immer";
import ProjectTemplate from "../common/ProjectTemplate";
import roof from "public/img/roof.jpg";

const Projects = () => {
	const [currentProject, setCurrentProject] = useImmer([
		{
			name: "Hyfe Cough Diarization",
			date: "October 2022 - March 2023",
			projectCardImage: hyfeProjectCardImage,
			projectImage: hyfeProjectImage,
			projectLink: '',
			colorTheme: "#FFFAE8",
			value: false,
			description:
				"Hyfe Cough Diarization takes an audio recording of an individual's cough and breaking it down into model that helps AI find a match for the type of disease the cough is associated with and the person responsible. The application employs Python in its backend and uses Pytorch to handle the processing of the cough samples. Lightning + Hydra is employed as well to help streamline and optimize the readability and functionality of the codebase.",
		},
		{
			name: "Angular Spotify Browser",
			date: "November 2022",
			projectCardImage: spotifyProjectCardImage,
			projectImage: roof,
			projectLink: 'https://github.com/jasonzubiate/angular-spotify-browser',
			colorTheme: "white",
			value: false,
			description:
				"This application communicates with a backend server written in Node.js/Express to browse the music on Spotify, a popular music streaming app. The provided backend server handles authentication via OAuth and communicates with the Spotify API. With HTTP requests to the backend server, the page supports searching for artists, albums, and tracks as well as navigating between the three resources.",
		},
		{
			name: "Nutripair",
			date: "April 2022 - September 2022",
			projectCardImage: nutripairProjectCardImage,
			projectImage: nutripairProjectImage,
			projectLink: '',
			colorTheme: "#adc698",
			value: false,
			description:
				"32 million Americans live with a food intolerance. Nutripair is a nutritional health management application that is committed to helping individuals create simple, sustainable, and long term dietary lifestyle changes with the aim of preventing and mitigating Chronic Illness.",
		},
		{
			name: "Anteater Wellness",
			date: "April 2022 - June 2022",
			projectCardImage: awProjectCardImage,
			projectImage: awProjectImage,
			projectLink: '/assets/awSRS.pdf',
			colorTheme: "white",
			value: false,
			description:
				"For UCI students, Anteater Wellness will track several statuses of health: physical, financial, intellectual, emotional, social, and spiritual. Students can set wellness goals to improve these categories and register for UCI affiliated wellness events scheduled bu the UCI Wellness Center. For the UCI Wellness Center, the app can be used to check on students’ wellness statuses as well as increase visibility of their events and services to students.",
		},
		{
			name: "Evaluating Canvas Collaboration",
			date: "April 2022 - June 2022",
			projectCardImage: uxProjectCardImage,
			projectImage: roof,
			projectLink: 'https://sites.google.com/uci.edu/jasonzubiateportfolio132/home',
			colorTheme: "white",
			value: false,
			description:
				"Over the course of the recent pandemic, students within higher education were among the first to move to remote learning and experience the various different software platforms used by professors for their teaching methods. With such high user traffic on these platforms during this time and with personal experiences to motivate our research, our team seeks for problems with current learning management systems and what case studies have shown needs change for LMS that wish to stay popular amongst both educators and students.",
		},
		{
			name: "Blockchain Technology Integration",
			date: "April 2022 - June 2022",
			projectCardImage: blockchainProjectCardImage, 
			projectImage: blockchainProjectImage,
			projectLink: '/assets/blockchainReport.pdf',
			colorTheme: "white",
			value: false,
			description:
				"There are several critical problems within the supply chain management industry of which the integration of blockchain systems can address. Organizations should begin implementing blockchain based networks to improve the organization as an organism. Integrating while keeping this approach in mind will provide the best experience for all users of the information system as well as improve the performance of the organization as a whole.",
		},
	]);

	// checks if the any currentProject is selected
	const isProjectSelected = () => {
		return currentProject.some((project) => project.value);
	};

	// renders all of project links
	const renderProjects = currentProject.map((page) => {
		return (
			<ProjectCard
				projectName={page.name}
				projectDate={page.date}
				projectImage={page.projectCardImage}
				setCurrentProject={setCurrentProject}
			/>
		);
	});

	// renders a single project when one is clicked
	const renderProject = currentProject
		.filter((page) => page.value == true)
		.map((page) => {
			return (
				<ProjectTemplate
					projectName={page.name}
					projectDate={page.date}
					projectImage={page.projectImage}
					projectLink={page.projectLink}
					projectDescription={page.description}
					projectColorTheme={page.colorTheme}
				/>
			);
		});

	return (
		<div className={`${styles.container} fade-in`}>
			{/* Have the styles.container-padding conditionally rendered so we can get the padding effect that we want based on whether a project is selected */}
			<div
				className={`${
					!isProjectSelected() ? `${styles["container-padding"]}` : ""
				}`}
			>
				{!isProjectSelected() ? (
					<div className={styles.h1}>Projects</div>
				) : null}
				<div
					className={`${styles["project-links"]} ${
						!isProjectSelected() ? styles["project-links-padding"] : ""
					}`}
				>
					{!isProjectSelected() ? renderProjects : renderProject}
				</div>
			</div>
		</div>
	);
};

export default Projects;
