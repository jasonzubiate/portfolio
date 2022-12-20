import Image from "next/image";
import React, { useRef, useEffect } from "react";
import styles from "styles/SlidingImages.module.scss";

// IMAGES
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
import snowPatio from "public/img/snowPatio.jpg";

const SlidingImages = () => {
	// Create a ref to the div element
	const containerRef:any = useRef();

	useEffect(() => {
		// Get the current scroll position
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// Get the height of the div element
		const divHeight = containerRef.current.offsetHeight;

		// Get the height of the viewport
		const viewportHeight = window.innerHeight;

		// Calculate the distance from the bottom of the div to the bottom of the viewport
		const distanceFromBottom =
			divHeight + containerRef.current.offsetTop - scrollTop - viewportHeight;

		// If the distance from the bottom is greater than 0, slide the div up by the distance
		if (distanceFromBottom > 0) {
			containerRef.current.style.transform = `translateY(-${distanceFromBottom}px)`;
		}
	}, []);

	return (
		<div className={styles.container} ref={containerRef}>
			<div className={styles["container-left"]}>
				<div className={styles["image-container-short"]}>
					<Image
						className={styles.image}
						src={hollywoodSign}
						alt="picture"
						fill
						priority
					/>
				</div>
				<div className={styles["image-container-short"]}>
					<Image
						className={styles.image}
						src={splashHouse}
						alt="picture"
						fill
						priority
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
			<div className={styles["container-right"]}>
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
					<Image className={styles.image} src={snowPatio} alt="picture" fill />
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
