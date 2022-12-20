import Image from "next/image";
import Link from "next/link";
import styles from "styles/Project.module.scss";
import fsPromises from "fs/promises";
import path from "path";

const Project = ({ project }) => {
	console.log(project);

	return (
		<div className={`${styles.container} fade-in`}>
			<div
				style={{ backgroundColor: project.colorTheme }}
				className={styles["container-left"]}
			>
				<h1 className={styles.header}>{project.name}</h1>
				<p className={styles["project-description"]}>{project.description}</p>
				{project.link !== "" ? (
					<Link
						className={styles["project-link"]}
						href={project.link}
						target="_blank"
					>
						Visit Project
					</Link>
				) : null}
				<div className={styles["additional-info"]}>
					<div>
						<div className={styles["additional-info-title"]}>Timeline</div>
						<div className={styles["additional-info-content"]}>
							{project.date}
						</div>
					</div>
					<div>
						<div className={styles["additional-info-title"]}>Role</div>
						<div className={styles["additional-info-content"]}>
							{project.roles.map((role) => {
								if (project.roles.indexOf(role) + 1 != project.roles.length) {
									return `${role} • `;
								} else {
									return role;
								}
							})}
						</div>
					</div>
					{project.tools.length > 0 && (
						<div>
							<div className={styles["additional-info-title"]}>Tools</div>
							<div className={styles["additional-info-content"]}>
								{project.tools.map((tool) => {
									if (project.tools.indexOf(tool) + 1 != project.tools.length) {
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
						src={`/img/${project.projectImage}`}
						alt="picture"
						fill
					/>
				</div>
			</div>
		</div>
	);
};

export default Project;

export const getStaticPaths = async () => {
	const filePath = path.join(process.cwd(), "json/projects.json");
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);

	const paths = objectData.projects.map((project) => {
		return {
			params: { id: project.name },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const filePath = path.join(process.cwd(), "json/projects.json");
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);
	const data = objectData.projects.filter((project) => project.name === id)[0];

	return {
		props: { project: data },
	};
};
