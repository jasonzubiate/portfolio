import Image from "next/image";
import React, { useRef, useEffect } from "react";
import styles from "styles/SlidingImages.module.scss";

// IMAGES
import hollywoodSign from "public/img/hollywoodsign.jpg";
import bikelane from "public/img/bikelane.jpg";
import palmSprings from "public/img/palmsprings.jpg"
import yankeeStadium from "public/img/yankees.jpg";
import pool from "public/img/pool.jpg";
import laMaison from "public/img/lamaison.jpg";
import snowPatio from "public/img/snowpatio.jpg";
import laDroguire from "public/img/ladroguerie.jpg";
import beamers from "public/img/beamers.jpg";
import boat from "public/img/boat.jpg";
import bridge from "public/img/bridge.jpg";
import newYork from "public/img/newYork.jpg";
import carbonara from "public/img/carbonara.jpg";
import splashHouse from "public/img/splashHouse.jpg";
import city from "public/img/city.jpg";
import club from "public/img/club.jpg"
import redStreet from "public/img/redstreet.jpg"

const SlidingImages = () => {
	// Create a ref to the div element
	const containerRef: any = useRef();

	const images = [
		hollywoodSign,
		bikelane,
		palmSprings,
		yankeeStadium,
		pool,
		snowPatio,
		laMaison,
		boat,
		newYork,
		carbonara,
		city,
		laDroguire,
		beamers,
		splashHouse,
		club,
		bridge,
		redStreet,
	];

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
				{images
					.filter((image: any) => {
						return images.indexOf(image) % 2 == 0;
					})
					.map((image: any) => {
						return (
							<div className={styles["image-container-short"]}>
								<Image
									className={styles.image}
									src={image}
									alt="picture"
									fill
									priority
								/>
							</div>
						);
					})}
			</div>
			<div className={styles["container-right"]}>
			{images
					.filter((image: any) => {
						return images.indexOf(image) % 2 == 1;
					})
					.map((image: any) => {
						return (
							<div className={styles["image-container-long"]}>
								<Image
									className={styles.image}
									src={image}
									alt="picture"
									fill
									priority
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default SlidingImages;
