import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "styles/ProjectCard.module.scss";

type ProjectCardProps = {
	projectName: string;
	projectDate: string;
	projectImage: any;
};

const ProjectCard = ({
	projectName,
	projectDate,
	projectImage,
}: ProjectCardProps) => {
	return (
		<Link className={styles["project-link"]} href={`/Projects/${projectName}`}>
			<h2 className={styles["project-link-label"]}>{projectName}</h2>
			<p className={styles["project-link-date"]}>{projectDate}</p>
			<div className={styles["project-link-image"]}>
				<Image className="img-card" src={projectImage} alt={projectName} fill />
			</div>
		</Link>
	);
};

export default ProjectCard;
