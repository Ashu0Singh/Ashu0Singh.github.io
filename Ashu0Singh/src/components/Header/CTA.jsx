import React from "react";
import { motion } from "framer-motion";
const CTA = () => {
	const initial = {
		translateY: 30,
		opacity: 0,
	};
	const animate = {
		translateY: 0,
		opacity: 1,
	};
	const transition = {
		duration: 0.8,
		delay: 1.6,
	};
	return (
		<motion.div
			initial={initial}
			animate={animate}
			transition={transition}
			className="cta">
			<a
				href={process.env.REACT_APP_CV_URL}
				className="btn">
				View CV
			</a>
			<a href="#contacts" className="btn btn-primary">
				Get in touch
			</a>
		</motion.div>
	);
};

export default CTA;
