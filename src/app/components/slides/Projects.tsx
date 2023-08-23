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
import {useScreenWidth} from "@/hooks/useScreenWidth";

const Projects: {
	name: string,
	description: string,
	link: string,
	icons: JSX.Element[],
	primary?: boolean,
	position?: string
}[] = [{
	name: "Elo.ai",
	description: "Saving enterprise clients thousands of hours by revolutionising the way they complete question answering tasks " +
		"such as RFPS, due diligence and more.",
	link: "https://www.elo.ai/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_e"}/>, <NextjsLogo size={24} key={"nj_icon_e"}/>,
		<RedisLogo size={24} key={"r_icon_e"}/>, <PostgresqlLogo size={24} key={"p_icon_e"}/>,
		<TailwindcssLogo size={24} key={"t_icon_e"}/>, <OpenaiLogo size={25} key={"o_icon_e"}/>,
		<NodejsLogo size={24} key={"n_icon_e"}/>],
	primary: true,
	position: "Co-Founder & CTO"
}, {
	name: "MusicPebbles.com",
	description: "Built in a month to give Spotify users an insight into how unique their music taste is, and intuitively" +
		" allow them to view or listen to their top songs and artists over various time spans.",
	link: "https://www.musicpebbles.com/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_ms"}/>, <NextjsLogo size={24} key={"nj_icon_ms"}/>,
		<SpotifyLogo size={24} key={"s_icon_ms"}/>, <RedisLogo size={24} key={"r_icon_ms"}/>,
		<TailwindcssLogo size={24} key={"t_icon_ns"}/>],
	position: "Founder"
}, {
	name: "Fakeddit.com",
	description: "The first social media where everything is AI generated, showing the complex interactions that can" +
		" emerge from AI bots interacting with each other in a way that’s entertaining for humans.\n" +
		"Built with GPT 4.0 and Matt Falconer",
	link: "https://www.fakeddit.com/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_f"}/>, <NextjsLogo size={24} key={"nj_icon_f"}/>,
		<TailwindcssLogo size={24} key={"t_icon_f"}/>, <MysqlLogo size={24} key={"ms_icon_f"}/>,
		<OpenaiLogo size={24} key={"o_icon_f"}/>],
	position: "Co-Founder"
}, {
	name: "WAMcast.ai",
	description: "A platform built to show what the future of personalised entertainment might look like by allowing users" +
		" to generate completely custom podcasts with their favourite celebrities from one sentence of input." +
		"\n Built in 10 hours by 3 Developers.",
	link: "https://wamcast.ai/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_w"}/>, <NextjsLogo size={24} key={"nj_icon_w"}/>,
		<PostgresqlLogo size={24} key={"ps_icon_w"}/>, <NodejsLogo size={24} key={"no_icon_w"}/>,
		<AnthropicLogo size={24} key={"an_icon_w"}/>],
	position: "Co-Founder"
}, {
	name: "Computational Capacity",
	description: "A 12 page paper on the theoretical limits of computation.\n This paper briefly discusses the limits of" +
		" computation in the context of our physical universe and the implications of it's limits on the future of " +
		" quantum computing.",
	link: "/files/ComputationalCapacity.pdf",
	icons: [<AcademicLogo size={24} key={"ac_icon_cc"}/>, <PaperLogo size={24} key={"p_icon_cc"}/>,
		<MathsLogo size={24} key={"m_icon_cc"}/>, <PhysicsLogo size={24} key={"ph_icon_cc"}/>],
	position: "Author"
}, {
	name: "Monochain.Network",
	description: "An entirely custom blockchain, written in the experimental V language, built to solve the lack of a" +
		" decentralised finance system that was environmentally and economically sustainable whilst also retaining" +
		" high performance",
	link: "https://github.com/AlfieRan/MonoChain",
	icons: [<AcademicLogo size={24} key={"ac_icon_mn"}/>, <PaperLogo size={24} key={"ph_icon_mn"}/>,
		<TypescriptLogo size={24} key={"ts_icon_mn"}/>, <VlangLogo size={24} key={"mn_icon_v"}/>,
		<NextjsLogo size={24} key={"nj_icon_mn"}/>, <PostgresqlLogo size={24} key={"ps_icon_mn"}/>],
	position: "Creator"
}];

export function ProjectsSlide() {
	const width = useScreenWidth();
	const offset = width < 640 ? 0 : 25;
	const scaleMulti = width < 640 ? 1 : 1.1;

	return (<div className={"flex flex-col w-full space-y-4"}>
		{Projects.map((project, index) => (
			<motion.div
				className={"w-full shadow-lg rounded-lg px-4 py-3 overflow-hidden " +
					(!project.primary ? "bg-white dark:bg-black-700 dark:border-2 dark:border-black-200 dark:text-white" :
						"bg-black-300 text-white dark:bg-[#ccc] border-2 border-black-200 dark:border-0 dark:text-black-700")}
				initial={{x: -100, scale: 0.9, opacity: 0.9}}
				whileInView={{x: 0, scale: 1, opacity: 1}}
				whileHover={{scale: scaleMulti, x: offset}}
				transition={{
					ease: "easeInOut",
					duration: 0.2,
				}}
				key={project.name + "_project_slide"}
			>
				<a href={project.link} target={"_blank"} className={"flex flex-col w-full space-y-1"}>
					<div
						className={"flex flex-col space-y-2 mb-2 md:flex-row md:space-y-0 w-full justify-between md:items-center"}>
						<div className={"flex flex-col items-start justify-center text-start"}>
							<p className={"font-semibold text-2xl"}>{project.name}</p>
							<p className={"text-xs"}>{project.position}</p>
						</div>
						<div className={"flex flex-row space-x-2"}>
							{project.icons}
						</div>
					</div>
					<div className={"space-y-1"}>
						{project.description.split("\n").map((line, index) => (
							<p key={project.name + "_line_" + index}>{line}</p>
						))}
					</div>
				</a>
			</motion.div>
		))}
	</div>)
}