import styles from "../../styles/Projects.module.scss";
import ProjectCard from "../../components/common/ProjectCard";
import fsPromises from "fs/promises";
import path from "path";

const Projects = (props) => {
	// project data from the projects.json
	const projects = props.projects;

	// base path for all projectCard images
	const imageBasePath = "/img";

	return (
		<div className={`${styles.container} fade-in`}>
			<h1 className={styles.h1}>Projects</h1>
			<div className={styles["project-links"]}>
				{projects.map((project) => {
					return (
						<ProjectCard
							projectName={project.name}
							projectDate={project.date}
							projectImage={`${imageBasePath}/${project.projectCardImage}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "json/projects.json");
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);

	return {
		props: objectData,
	};
}
