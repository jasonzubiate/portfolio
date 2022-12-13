import React from "react";
import Image from "next/image";
import styles from "styles/NavLink.module.scss";
import Link from "next/link";

type NavlinkProps = {
	linkName: string;
	linkImage: any;
	setNavToggle: any;
	selected: boolean;
	setCurrentPage: any;
};

const Navlink = ({
	linkName,
	linkImage,
	setNavToggle,
	selected,
	setCurrentPage,
}: NavlinkProps) => {
	const changePage = () => {
		setCurrentPage((draft) => {
			draft.map((page) => {
				if (page.name == linkName) {
					draft[draft.findIndex(({ name }) => name === linkName)].value = true;
				} else {
					draft[draft.findIndex(({ name }) => name === page.name)].value =
						false;
				}
			});
		});
		setNavToggle((draft) => !draft);
	};

	return (
		<Link className={styles['nav-link']} href="#" onClick={() => changePage()}>
			<div className={styles["label-group"]}>
				{selected ? <div className={styles["active-circle"]}></div> : null}
				<h2 className={`${styles["nav-link-label"]} rubik-font`}>{linkName}</h2>
			</div>
			<div className={styles["nav-link-image"]}>
				<Image className={styles["img-card"]} src={linkImage} alt="picture" fill />
			</div>
		</Link>
	);
};

export default Navlink;
