import Image from "next/image";
import styles from "../../styles/MyImage.module.css"

const MyImage = ({ width, maxWidth, ...rest }) => {
	let widths = {};
	width ? (widths["width"] = width) : "100%";
	maxWidth ? (widths["maxWidth"] = maxWidth) : "100%";

	return (
		<span className={styles.imageContainer} style={widths}>
			<Image className={styles.image} {...rest} />
		</span>
	);
};

export default MyImage;
