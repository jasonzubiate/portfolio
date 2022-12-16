import Image from "next/image";
import React, { useRef, useEffect } from "react";
import styles from "styles/SlidingImages.module.scss";

// HOOKS
import useWindowDimensions from "../../hooks/useWindowDimensions";

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
	const containerRef = useRef(null);
	const {width, height} = useWindowDimensions();

	useEffect(() => {
		const divHeight = containerRef.current.offsetHeight;
		const windowHeight = height
		const outOfScreenHeight = divHeight - windowHeight;
		console.log(outOfScreenHeight)

    // Calculate the amount to translate the div so that its bottom edge reaches the bottom of the screen
    const translateY = outOfScreenHeight * -1;

    // Apply the CSS transform to the div
    containerRef.current.style.transform = `translateY(${translateY}px)`;
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
