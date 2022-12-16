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
					Irvine specializing in
					<span className={`${styles.highlight} burnt-umber`}>
						{" "}
						human-computer interaction
					</span>
					.
				</p>

				<br />

				<p className={styles.p}>
					Originally a computer science major, I began taking software design
					courses and soon found a passion for exploring the{" "}
					<span className={`${styles.highlight} burnt-umber`}>
						user-centered design process
					</span>
					. I have since combined these skills throughout my front-end
					development journey.
				</p>

				<br />

				<p className={styles.p}>
					I envision becoming a{" "}
					<span className={`${styles.highlight} burnt-umber`}>
						user-experience designer
					</span>{" "}
					and creating applications that bring incredible benefits to society.
				</p>

				<br />

				<p className={styles.p}>
					Being from California, I love to visit the beach during the summer and
					stay active outdoors. I work out often to keep myself fit and enjoy
					cooking new meals in the kitchen.
				</p>

				<br />

				<p className={styles.p}>
					Over the past year, I also have dove into{" "}
					<span className={`${styles.highlight} burnt-umber`}>
						music production
					</span>{" "}
					and electronic dance music. It has since been a fascinating challenge
					that I wish to continue exploring. I want to produce dance music that
					keeps people moving and brings positive energy.
				</p>
			</div>
		</div>
	);
};

export default About;
