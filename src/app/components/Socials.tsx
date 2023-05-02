import {TwitterLogo, YoutubeLogo, LinkedLogo, GithubLogo} from "@/app/components/logos";

export default function Socials() {
	const Socials: { component: any; alt: string; link: string }[] = [
		{
			alt: "Github",
			component: GithubLogo,
			link: "https://github.com/alfieran",
		},
		{
			alt: "LinkedIn",
			component: LinkedLogo,
			link: "https://www.linkedin.com/in/alfie-ranstead-661064225",
		},
		{
			alt: "Twitter",
			component: TwitterLogo,
			link: "https://twitter.com/alfieranstead",
		},
		{
			alt: "Youtube",
			component: YoutubeLogo,
			link: "https://youtube.com/c/unofedeo",
		},
	];

	return (
		<div className={"flex w-full h-full flex:flex-wrap"}>
			{Socials.map((social, index) => (
				<div
					className={"flex w-fit h-fit hover:scale-110 active:scale-95"}
					key={social.alt}
				>
					<a
						href={social.link}
						className={`${index === 0 ? "pl-0" : "pl-1.5"} ${index === Socials.length - 1 ? "pr-0" : "pr-1.5"} `}
						target={"_blank"}
					>
						<social.component size={"26"} />
					</a>
				</div>
			))}
		</div>
	);
}
