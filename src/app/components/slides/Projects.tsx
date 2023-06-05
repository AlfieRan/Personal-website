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
	icons: JSX.Element[]
}[] = [{
	name: "MusicPebbles.com",
	description: "A Spotify Dashboard that lets you view, listen to and rank your top songs and artists.\n " +
		"Built over a one month period in an attempt to solve the problem of the lack of a Spotify dashboard " +
	"that was actually useful and looked good, MusicPebbles.com is a fully featured Spotify dashboard that " +
		"you can use right now!\n It's incredibly efficient, and can handle thousands of users without costing more than " +
		"a few pounds a month to run.",
	link: "https://www.musicpebbles.com/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_ms"}/>, <NextjsLogo size={24} key={"nj_icon_ms"}/>,
		<SpotifyLogo size={24} key={"s_icon_ms"}/>, <RedisLogo size={24} key={"r_icon_ms"}/>,
		<TailwindcssLogo size={24} key={"t_icon_ns"}/>]
}, {
	name: "Fakeddit.com",
	description: "The first social network where everything is AI generated.\n Using the power of GPT-4, Ai bots create" +
		" posts, comments and interact with each other entirely of their own accord, allowing for a truly unique experience" +
		" of complex behaviour without any human input.",
	link: "https://www.fakeddit.com/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_f"}/>, <NextjsLogo size={24} key={"nj_icon_f"}/>,
		<TailwindcssLogo size={24} key={"t_icon_f"}/>, <MysqlLogo size={24} key={"ms_icon_f"}/>,
		<OpenaiLogo size={24} key={"o_icon_f"}/>]
}, {
	name: "WAMcast.ai",
	description: "Generate an entire podcast from a single text input. \n Choose two of your favourite celebrities or " +
		"specialists, write a sentence describing what you'd like them to talk about and let our AI do the rest.\n " +
		"Originally built in only 10 hours for V7's Hackathon, this project is on the cutting edge of what AI can do and " +
		"gives a glimpse into the future of personalised content creation.",
	link: "https://wamcast.ai/",
	icons: [<TypescriptLogo size={24} key={"ts_icon_w"}/>, <NextjsLogo size={24} key={"nj_icon_w"}/>,
		<PostgresqlLogo size={24} key={"ps_icon_w"}/>, <NodejsLogo size={24} key={"no_icon_w"}/>,
		<AnthropicLogo size={24} key={"an_icon_w"}/>]
}, {
	name: "Computational Capacity",
	description: "A 12 page paper on the theoretical limits of computation.\n This paper discusses the limits of" +
		" computation in the context of our physical universe and the implications of it's limits on the future of " +
		" quantum computing.\n This is only a very brief introduction to the incredibly intricate and complex topic of" +
		" quantum computing and is intended to be a starting point for further research.",
	link: "/files/ComputationalCapacity.pdf",
	icons: [<AcademicLogo size={24} key={"ac_icon_cc"}/>, <PaperLogo size={24} key={"p_icon_cc"}/>,
		<MathsLogo size={24} key={"m_icon_cc"}/>, <PhysicsLogo size={24} key={"ph_icon_cc"}/>]
}, {
	name: "Monochain.Network",
	description: "A decentralised blockchain project built on a custom consensus algorithm. \n Designed around the " +
		"completely custom 'Proof of Trust' consensus protocol, which aims to solve the problem of centralisation in " +
		"blockchain mining, whilst maintaining as much of the energy efficiency of Proof of Stake as possible.\n " + "" +
		"Monochain is currently not in active development or in a stable state, but is a project I am very passionate " +
		"about and hope to continue working on in the future.",
	link: "https://github.com/AlfieRan/MonoChain",
	icons: [<AcademicLogo size={24} key={"ac_icon_mn"}/>, <PaperLogo size={24} key={"ph_icon_mn"}/>,
		<TypescriptLogo size={24} key={"ts_icon_mn"}/>, <VlangLogo size={24} key={"mn_icon_v"}/>,
		<NextjsLogo size={24} key={"nj_icon_mn"}/>, <PostgresqlLogo size={24} key={"ps_icon_mn"}/>]
}];

export function ProjectsSlide() {
	const width = useScreenWidth();
	const offset = width < 640 ? 0 : 25;
	const scaleMulti = width < 640 ? 1 : 1.1;

	return (<div className={"flex flex-col w-full space-y-4"}>
		{Projects.map((project, index) => (
			<motion.div
				className={"w-full shadow-lg rounded-lg px-4 py-3 bg-white dark:bg-black-700 dark:border-2 dark:border-black-200 dark:text-white overflow-hidden"}
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
						<p className={"font-semibold text-2xl"}>{project.name}</p>
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