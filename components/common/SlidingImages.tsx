import Image from "next/image";
import React from "react";
import styles from "styles/SlidingImages.module.scss";

// Images
import bikelane from "public/img/bikelane.jpg";
import hollywoodSign from "public/img/hollywoodsign.jpg";
import laDroguire from "public/img/ladroguerie.jpg";
import beamers from "public/img/beamers.jpg";
import boat from "public/img/boat.jpg";
import bridge from "public/img/bridge.jpg";
import laMaison from "public/img/lamaison.jpg";
import yankeeStadium from "public/img/yankees.jpg";
import pool from "public/img/pool.jpg";
import newYork from "public/img/newYork.jpg";
import carbonara from "public/img/carbonara.jpg";
import splashHouse from "public/img/splashHouse.jpg";
import city from "public/img/city.jpg";

const SlidingImages = () => {
	return (
		<div className={styles.container}>
			<div
				className={`${styles["container-split"]} ${styles["container-left"]}`}
			>
				<div className={styles["image-container-short"]}>
					<Image
						className={styles.image}
						src={hollywoodSign}
						alt="picture"
						fill
					/>
				</div>
				<div className={styles["image-container-short"]}>
					<Image
						className={styles.image}
						src={splashHouse}
						alt="picture"
						fill
					/>
				</div>
				<div className={styles["image-container-short"]}>
					<Image className={styles.image} src={pool} alt="picture" fill />
				</div>
				<div className={styles["image-container-short"]}>
					<Image className={styles.image} src={city} alt="picture" fill />
				</div>
				<div className={styles["image-container-short"]}>
					<Image className={styles.image} src={newYork} alt="picture" fill />
				</div>
				<div className={styles["image-container-short"]}>
					<Image className={styles.image} src={laMaison} alt="picture" fill />
				</div>
				<div className={styles["image-container-short"]}>
					<Image className={styles.image} src={beamers} alt="picture" fill />
				</div>
				<div className={styles["image-container-short"]}>
					<Image className={styles.image} src={pool} alt="picture" fill />
				</div>
				<div className={styles["image-container-short"]}>
					<Image className={styles.image} src={beamers} alt="picture" fill />
				</div>
			</div>
			<div
				className={`${styles["container-split"]} ${styles["container-right"]}`}
			>
				<div className={styles["image-container-long"]}>
					<Image className={styles.image} src={bikelane} alt="picture" fill />
				</div>
				<div className={styles["image-container-long"]}>
					<Image
						className={styles.image}
						src={yankeeStadium}
						alt="picture"
						fill
					/>
				</div>
				<div className={styles["image-container-long"]}>
					<Image className={styles.image} src={boat} alt="picture" fill />
				</div>
				<div className={styles["image-container-long"]}>
					<Image className={styles.image} src={boat} alt="picture" fill />
				</div>
				<div className={styles["image-container-long"]}>
					<Image className={styles.image} src={carbonara} alt="picture" fill />
				</div>
				<div className={styles["image-container-long"]}>
					<Image className={styles.image} src={laDroguire} alt="picture" fill />
				</div>
				<div className={styles["image-container-long"]}>
					<Image className={styles.image} src={laDroguire} alt="picture" fill />
				</div>
				<div className={styles["image-container-long"]}>
					<Image className={styles.image} src={bridge} alt="picture" fill />
				</div>
			</div>
		</div>
	);
};

export default SlidingImages;
