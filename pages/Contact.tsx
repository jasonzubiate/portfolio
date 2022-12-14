// REACT & NEXTJS
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// STYLE
import styles from "../styles/Contact.module.scss";

// IMAGES
import home from "public/img/newporthome.jpg";

// ICONS
import { BsLinkedin, BsGithub, BsFileEarmarkText } from "react-icons/bs";

// EMAILJS
import emailjs from "@emailjs/browser";

const Contact = () => {
	const [submitted, setSubmitted] = useState(false);

	// sends to https://dashboard.emailjs.com/admin
	const sendEmail = (e:any) => {
		console.log("subbed");
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ghfzuen",
				"template_2xv951q",
				e.target,
				"U4Me_Bn1wNHxFRKCp"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setSubmitted(true);
	};

	setTimeout(() => {
		setSubmitted(false);
	}, 3000);

	return (
		<div className={`${styles.container} fade-in`}>
			<div className={styles["container-left"]}>
				<div className={styles["image-container"]}>
					<Image
						className={styles.image}
						src={home}
						alt="picture"
						fill
						quality={100}
						priority
					/>
				</div>
			</div>
			<div className={styles["container-right"]}>
				<h1 className={styles.h1}>Get In Touch</h1>
				<div className={styles["contact-content"]}>
					<form action="" onSubmit={sendEmail} className={styles.form}>
						<input
							className={styles.input}
							type="text"
							placeholder="Full Name"
							name="fullName"
							required
						/>

						<input
							className={styles.input}
							type="email"
							placeholder="E-mail"
							name="email"
							required
						/>

						<input
							className={styles.input}
							type="text"
							placeholder="Message"
							name="message"
							required
						/>
						{submitted && (
							<label className={styles["submission-notification"]}>Sent</label>
						)}
						<div>
							<button className={styles.btn}>Submit</button>
						</div>
					</form>
					<div className={styles["misc-content"]}>
						<div>
							<div className={styles.h3}>Contact</div>
							<div className={styles.h4}>jzubiate@uci.edu</div>
						</div>
						<div>
							<div className={styles.h3}>Based in</div>
							<div className={styles.h4}>Irvine, California</div>
						</div>
						<div>
							<div className={styles.h3}>Education</div>
							<div className={styles.h4}>
								B.S. Informatics:
								<div className={styles["no-wrap"]}>Human-Computer</div>{" "}
								Interaction
							</div>
						</div>
						<div className={styles.links}>
							<Link href={"https://www.linkedin.com/in/jasonzubiate/"}>
								<BsLinkedin size={"2rem"} color="black" />
							</Link>
							<Link href={"https://github.com/jasonzubiate"}>
								<BsGithub size={"2rem"} color="black" />
							</Link>
							<Link href="/assets/docs/jasonzubiate.pdf" target="_blank">
								<BsFileEarmarkText size={"2rem"} color="black" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
