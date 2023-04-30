"use client";
import {motion} from "framer-motion";
import {
	SpotifyLogo,
	TypescriptLogo,
	NextjsLogo,
	PostgresqlLogo,
	RedisLogo,
	TailwindcssLogo,
	NodejsLogo,
	VlangLogo,
	MathsLogo,
	PaperLogo,
	PhysicsLogo,
	AcademicLogo,
	MysqlLogo,
	AnthropicLogo,
	OpenaiLogo
} from "@/app/components/logos";

const Projects: {
	name: string,
	description: string,
	link: string,
	icons: JSX.Element[]
}[] = [{
	name: "MusicPebbles.com",
	description: "A Spotify Dashboard that lets you view, listen to and rank your top songs and artists.",
	link: "https://www.musicpebbles.com/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_ms"}/>, <NextjsLogo size={24} key={"nj_icon_ms"}/>,
		<SpotifyLogo size={24} key={"s_icon_ms"}/>, <RedisLogo size={24} key={"r_icon_ms"}/>,
		<TailwindcssLogo size={24} key={"t_icon_ns"}/>]
}, {
	name: "Fakeddit.com",
	description: "The first social network where everything is AI generated.",
	link: "https://www.fakeddit.com/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_f"}/>, <NextjsLogo size={24} key={"nj_icon_f"}/>,
		<TailwindcssLogo size={24} key={"t_icon_f"}/>, <MysqlLogo size={24} key={"ms_icon_f"}/>,
		<OpenaiLogo size={24} key={"o_icon_f"}/>]
}, {
	name: "WAMcast.ai",
	description: "Generate an entire podcast from a single text input.",
	link: "https://wamcast.ai/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_w"}/>, <NextjsLogo size={24} key={"nj_icon_w"}/>,
		<PostgresqlLogo size={24} key={"ps_icon_w"}/>, <NodejsLogo size={24} key={"no_icon_w"}/>,
		<AnthropicLogo size={24} key={"an_icon_w"}/>]
}, {
	name: "Computational Capacity",
	description: "A 12 page paper on the theoretical limits of computation.",
	link: "/files/ComputationalCapacity.pdf",
	icons: [<AcademicLogo size={24} key={"ac_icon_cc"}/>, <PaperLogo size={24} key={"p_icon_cc"}/>,
		<MathsLogo size={24} key={"m_icon_cc"}/>, <PhysicsLogo size={24} key={"ph_icon_cc"}/>]
}, {
	name: "Monochain.Network",
	description: "A decentralised blockchain project built on a custom consensus algorithm.",
	link: "https://monochain.network/",
	icons: [<AcademicLogo size={24} key={"ac_icon_mn"}/>, <PaperLogo size={24} key={"ph_icon_mn"}/>,
		<TypescriptLogo size={24} key={"ts_icon_mn"}/>, <VlangLogo size={24} key={"mn_icon_v"}/>,
		<NextjsLogo size={24} key={"nj_icon_mn"}/>, <PostgresqlLogo size={24} key={"ps_icon_mn"}/>]
}];

export function ProjectsSlide() {
	return (<div className={"flex flex-col w-full space-y-4"}>
		{Projects.map((project, index) => (
			<a href={project.link} className={"hover:scale-105 active:scale-95 ease-in-out duration-100"} target={"_blank"}
				 key={project.name + "_project_slide"}>
				<motion.div
					className={"flex flex-col w-full shadow-lg rounded-lg px-4 py-3 space-y-1 bg-white dark:bg-black-700 dark:border-2 dark:border-black-200 dark:text-white overflow-hidden"}
					initial={{x: (index % 2) * 100 - 50, scale: 0.9, opacity: 0.9}}
					whileInView={{x: 0, scale: 1, opacity: 1}}
				>
					<div className={"flex flex-row w-full justify-between items-center"}>
						<p className={"font-semibold text-xl"}>{project.name}</p>
						<div className={"flex flex-row space-x-2"}>
							{project.icons}
						</div>
					</div>
					<p>{project.description}</p>
				</motion.div>
			</a>
		))}
	</div>)
}