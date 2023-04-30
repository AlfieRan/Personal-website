"use client";
import {motion} from "framer-motion";

const Projects: {
	name: string,
	description: string,
	link: string,
	icons: JSX.Element[]
}[] = [{
		name: "MusicPebbles.com",
		description: "A Spotify Dashboard that lets you view, listen to and rank your top songs and artists.",
		link: "https://www.musicpebbles.com/",
		icons: []
	}, {
		name: "Fakeddit",
		description: "The first social network where everything is AI generated.",
		link: "https://www.fakeddit.com/",
		icons: []
	},{
	name: "Computational Capacity",
	description: "A 12 page paper on the theoretical limits of computation.",
	link: "/files/ComputationalCapacity.pdf",
	icons: []
},{
	name: "The Monochain Network",
	description: "A decentralised blockchain project built on a custom consensus algorithm.",
	link: "https://monochain.network/",
	icons: []
}];

export function ProjectsSlide() {
	return (<div className={"flex flex-col w-full space-y-4"}>
		{Projects.map((project, index) => (
			<a href={project.link} className={"hover:scale-105 active:scale-95 ease-in-out duration-100"} target={"_blank"} key={project.name + "_project_slide"}>
				<motion.div
					className={"flex flex-col w-full shadow-lg rounded-lg px-4 py-3 bg-white dark:bg-gray-800 dark:text-white overflow-hidden"}
					initial={{x: (index % 2) * 100 - 50, scale: 0.9, opacity: 0.9}}
					whileInView={{x: 0, scale: 1, opacity: 1}}
				>
					<p className={"font-semibold text-xl"}>{project.name}</p>
					<p>{project.description}</p>
				</motion.div>
			</a>
		))}
	</div>)
}