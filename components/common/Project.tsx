import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "styles/Project.module.scss";

type ProjectProps = {
	projectName: string;
	projectDate: string;
	projectRoles: string[];
	projectTools: string[];
	projectImage: any;
	projectLink: string;
	projectDescription: string;
	projectColorTheme: string;
};
const Project = ({
	projectName,
	projectDate,
	projectRoles,
	projectTools,
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
				{projectLink !== "" ? (
					<Link
						className={styles["project-link"]}
						href={projectLink}
						target="_blank"
					>
						Visit Project
					</Link>
				) : null}
				<div className={styles["additional-info"]}>
					<div>
						<div className={styles["additional-info-title"]}>Timeline</div>
						<div className={styles["additional-info-content"]}>
							{projectDate}
						</div>
					</div>
					<div>
						<div className={styles["additional-info-title"]}>Role</div>
						<div className={styles["additional-info-content"]}>
							{projectRoles.map((role) => {
								if (projectRoles.indexOf(role) + 1 != projectRoles.length) {
									return `${role} • `;
								} else {
									return role;
								}
							})}
						</div>
					</div>
					{projectTools.length > 0 && (
						<div>
							<div className={styles["additional-info-title"]}>Tools</div>
							<div className={styles["additional-info-content"]}>
								{projectTools.map((tool) => {
									if (projectTools.indexOf(tool) + 1 != projectTools.length) {
										return `${tool} • `;
									} else {
										return tool;
									}
								})}
							</div>
						</div>
					)}
				</div>
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

export default Project;
