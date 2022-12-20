import styles from "../../styles/Projects.module.scss";
import ProjectCard from "../../components/common/ProjectCard";
import fsPromises from "fs/promises";
import path from "path";

// retrieves all of the project data from projects.json
export const getStaticProps = async () => {
	const filePath = path.join(process.cwd(), "json/projects.json");
	const jsonData:any = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);

	return {
		props: objectData,
	};
};

type ProjectsProps = {
	projects: any
}

const Projects = ({ projects }: ProjectsProps) => {
	return (
		<div className={`${styles.container} fade-in`}>
			<h1 className={styles.h1}>Projects</h1>
			<div className={styles["project-links"]}>
				{projects.map((project:any) => {
					return (
						<ProjectCard
							projectName={project.name}
							projectDate={project.date}
							projectImage={`/img/${project.projectCardImage}`}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
