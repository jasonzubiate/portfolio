import React from "react";
import Image from "next/image";
import bluelights from "../../public/img/bluelights.jpg";
import yellowlights from '../../public/img/yellowlights.jpg'
import swirllights from '../../public/img/swirllights.jpg'
import mistakelights from '../../public/img/mistakelights.jpg'

function Navbar() {
	return (
		<nav id="nav">
			<div id="nav-links">
				<a className="nav-link" href="#">
					<h2 className="nav-link-label rubik-font">Home</h2>
					<Image
						className="nav-link-image"
						src={bluelights}
						alt="picture of blue lights"
					/>
				</a>
        <a className="nav-link" href="#">
					<h2 className="nav-link-label rubik-font">About</h2>
					<Image
						className="nav-link-image"
						src={yellowlights}
						alt="picture of blue lights"
					/>
				</a>
				<a className="nav-link" href="#">
					<h2 className="nav-link-label rubik-font">Projects</h2>
					<Image
						className="nav-link-image"
						src={mistakelights}
						alt="picture of blue lights"
					/>
				</a>
				<a className="nav-link" href="#">
					<h2 className="nav-link-label rubik-font">Contact</h2>
					<Image
						className="nav-link-image"
						src={swirllights}
						alt="picture of blue lights"
					/>
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
