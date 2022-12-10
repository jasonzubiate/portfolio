import React from "react";
import styles from "styles/Main.module.scss";

const Main = () => {
	return (
		<div className={`${styles.container} fade-in`}>
			<div className={styles.content}>
				<h1 id="name" >Jason Zubiate</h1>
				<h2 id="profession" >Frontend Developer</h2>
			</div>
		</div>
	);
};

export default Main;
