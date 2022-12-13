import Image from "next/image";
import React from "react";
import styles from "../../styles/About.module.scss";
import SlidingImages from "../common/SlidingImages";

const About = () => {
	return (
		<div id="about" className={`${styles.container} fade-in`}>
			<div className={`${styles.container} ${styles.left}`}>
				<SlidingImages />
			</div>
			<div className={`${styles.container} ${styles.right}`}>
				<h1 className={styles.h1}>
					I’m <span className="cadmlum-orange"> Jason</span>, an experienced
					<div className={styles["slide-right"]}>frontend</div> developer.
				</h1>

				<br />

				<p className={styles.p}>
					I am a fourth-year informatics major at the University of California,
					Irvine with a specialization in
					<span className={`${styles.highlight} burnt-umber`}>
						{" "}
						human-computer interaction
					</span>
					.
				</p>

				<br />

				<p className={styles.p}>
					Originally a computer science major, I began taking software design
					courses and soon found passion in exploring the{" "}
					<span className={`${styles.highlight} burnt-umber`}>
						user-centered design process
					</span>
					. I have also used my previous experience in object-oriented
					programming to becoming a front-end developer to bring my ideas to
					life.
				</p>

				<br />

				<p className={styles.p}>
					I envision becoming a{" "}
					<span className={`${styles.highlight} burnt-umber`}>
						user-experience designer
					</span>{" "}
					and create applications that have beneficial impacts on society.
				</p>

				<br />

				<p className={styles.p}>
					Being from California, I love to visit the beach during the summer and
					stay active outdoors. I workout often to keep myself fit and watch
					different sports throughout the year.
				</p>

				<br />

				<p className={styles.p}>
					I also have a hobby of{" "}
					<span className={`${styles.highlight} burnt-umber`}>
						producing EDM music
					</span>
					. Over the past year I have slowly dove into the area of music
					production and it is a fascinating challenge that I wish to continue
					exploring. I want to produce dance music that keeps people moving and
					brings joy to those they are with.
				</p>
			</div>
		</div>
	);
};

export default About;
