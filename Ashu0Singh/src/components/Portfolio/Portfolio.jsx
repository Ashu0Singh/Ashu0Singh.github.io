import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import { AiFillGithub } from "react-icons/ai";
import { PiMonitor } from "react-icons/pi";
import { motion, useInView, useAnimation } from "framer-motion";

const data = [
	{
		id: 1,
		weburl: "https://www.farmershaat.com/",
		title: "Farmers Haat",
		date: "May 23 - Present",
		techStack: "ReactJs, SASS, Strapi.js, NodeJS, PostgreSQL, RazorPay",
		desc: `Farmers Haat - your online stop for genuine wood-pressed mustard oil. Experience our user-friendly B2C eCommerce platform powered by Strapi.js, offering secure transactions with Razorpay and a seamless journey from rural farms to your home.`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/Farmers_Haat.png",
		github: "https://github.com/Ashu0Singh/FarmersHaat",
	},
	{
		id: 2,
		weburl: "https://www.ashu-singh.com/PromptBattle/",
		title: "Prompt Battle",
		date: "Nov 22 - Dec 22",
		techStack: "ReactJs, Bootstrap, NodeJS, ExpressJs, MongoDB",
		desc: `Dive into the AI Prompt Battle – a thrilling platform where contestants engage in a visual showdown, generating stunning images through AI based on unique prompts. Experience the fusion of human imagination and AI creativity, and prepare for a riveting battle of artistic prowess!`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/Prompt_Battle.png",
		github: "https://github.com/Ashu0Singh/PromptBattle",
	},
	{
		id: 3,
		weburl: "https://www.ashu-singh.com/AudioAscend/",
		title: "AudioAscend",
		date: "March 23",
		techStack: "ReactJs, SASS, Strapi.js, NodeJS, PostgreSQL, Stripe.js",
		desc: `A cutting-edge, open-source eCommerce platform specializing in premium audio solutions. This repository demonstrates the use of technologies like React, Node.js, and PostgreSQL to provide a seamless user experience in online audio equipment shopping.`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/AudioAscend.png",
		github: "https://github.com/Ashu0Singh/AudioAscend",
	},
	{
		id: 4,
		weburl: "https://www.ashu-singh.com/SpaceTourism/",
		title: "Space Tourism",
		date: "April 22 - May 22",
		techStack: "ReactJs, CSS",
		desc: `Discover the universe with Space Tourism, your digital gateway to everything about space travel. Dive in for engaging, insightful education on extraterrestrial adventures right from the comfort of your home!`,
		url: "https://raw.githubusercontent.com/Ashu0Singh/Ashu0Singh/master/src/assets/Space_Tourism.png",
		github: "https://github.com/Ashu0Singh/SpaceTourism",
	},
];

const Portfolio = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const mainControls = useAnimation();
	useEffect(() => {
		mainControls.start(isInView && "visible");
	}, [isInView]);

	return (
		<section id="portfolio" className="portfolio">
			<h1>Portfolio</h1>
			<h5>Recent Works</h5>
			<div ref={ref} className="portfolio__container">
				{data.map(
					({
						id,
						url,
						title,
						github,
						weburl,
						desc,
						date,
						techStack,
					}) => {
						return (
							<motion.article
								variants={{
									hidden: { opacity: 0, translateY: 30 },
									visible: { opacity: 1, translateY: 0 },
								}}
								key={id}
								initial="hidden"
								animate={mainControls}
								transition={{
									duration: 1,
									delay: 0.2,
								}}
								className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={url} alt={title}></img>
								</div>
								<div className="details">
									<div className="projectDetails">
										<div className="title-time">
											<h3>{title}</h3>
											<p className="date">{date}</p>
										</div>
										<p className="techStack">{techStack}</p>
									</div>

									<p className="desc">{desc}</p>
									<div className="button-flex">
										<div className="portfolio__item-cta">
											<a
												href={github}
												className="btn btn-primary ctaBtn"
												target="_blank">
												<AiFillGithub fontSize={24} />
												Github
											</a>
										</div>
										<div className="portfolio__item-cta">
											<a
												href={weburl}
												className="btn btn-primary ctaBtn"
												target="_blank">
												<PiMonitor fontSize={24} />
											</a>
										</div>
									</div>
								</div>
							</motion.article>
						);
					}
				)}
			</div>
		</section>
	);
};

export default Portfolio;
