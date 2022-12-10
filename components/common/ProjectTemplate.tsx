import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "styles/ProjectTemplate.module.scss";

type ProjectProps = {
	projectName: string;
	projectDate: string;
	projectImage: any;
	projectLink: string;
	projectDescription: string;
	projectColorTheme: string;
};
const ProjectTemplate = ({
	projectName,
	projectDate,
	projectImage,
	projectLink,
	projectDescription,
	projectColorTheme,
}: ProjectProps) => {
	return (
		<div className={`${styles.container} fade-in`}>
			<div
				style={{ backgroundColor: projectColorTheme }}
				className={styles["container-left"]}
			>
				<h1 className={styles.header}>{projectName}</h1>
				<p className={styles["project-description"]}>{projectDescription}</p>
				<Link
					className={styles["project-link"]}
					href={projectLink}
					target="_blank"
				>
					Visit Project
				</Link>
				<label className={styles["project-date"]}>{projectDate}</label>
			</div>
			<div className={styles["container-right"]}>
				<div className={styles["image-container"]}>
					<Image
						className={styles.image}
						src={projectImage}
						alt="picture"
						fill
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectTemplate;
