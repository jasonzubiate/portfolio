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
		setCurrentPage((draft:any) => {
			draft.map((page:any) => {
				if (page.name == linkName) {
					draft[draft.findIndex(({ name }:any) => name === linkName)].selected =
						true;
				} else {
					draft[draft.findIndex(({ name }:any) => name === page.name)].selected =
						false;
				}
			});
		});
		setNavToggle((draft:any) => !draft);
	};

	return (
		<Link
			className={styles["nav-link"]}
			href={linkName != "Home" ? `/${linkName}` : "/#"}
			onClick={() => changePage()}
		>
			<div className={styles["label-group"]}>
				{selected ? <div className={styles["active-circle"]}></div> : null}
				<h2 className={styles["nav-link-label"]}>{linkName}</h2>
			</div>
			<div className={styles["nav-link-image"]}>
				<Image
					className={styles["img-card"]}
					src={linkImage}
					alt={linkName}
					fill
					quality={100}
				/>
			</div>
		</Link>
	);
};

export default Navlink;
