import React from "react";
import styles from "styles/Main.module.scss";

const Main = () => {
	return (
		<div className={`${styles.container} fade-in`}>
			<div className={styles.content}>
				<h1 className={styles.name}>Jason Zubiate</h1>
				<h2 className={styles.profession}>Frontend Developer</h2>
			</div>
		</div>
	);
};

export default Main;
