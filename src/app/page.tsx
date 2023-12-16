import {
	AboutSlide,
	ContactSlide,
	EducationSlide,
	ProjectsSlide,
	Tools,
	YoutubeNoLink,
} from "@/app/components/slides";
import { FC } from "react";

interface ItemProps {
	index: number;
}

export default function Home() {
	const Items: FC<ItemProps>[] = [
		AboutSlide,
		Tools,
		ProjectsSlide,
		YoutubeNoLink,
		EducationSlide,
		ContactSlide,
	];

	return (
		<div className={"flex flex-col w-full h-fit min-h-screen"}>
			<div
				className={
					"flex 2xl:hidden flex-col space-y-12 pb-12 w-full h-fit"
				}
			>
				{Items.map((Item, index) => (
					<Item index={index} key={`slide_${index}`} />
				))}
			</div>
			<div className={"hidden 2xl:grid w-full h-full min-h-fit"}>
				<div className={"grid grid-cols-2 w-full gap-4"}>
					<div
						className={
							"col-span-1 w-full h-full flex flex-col space-y-4"
						}
					>
						<AboutSlide />
						<Tools />
						<EducationSlide />
						<ContactSlide />
					</div>
					<div
						className={
							"col-span-1 w-full h-full flex flex-col space-y-4"
						}
					>
						<ProjectsSlide />
						<YoutubeNoLink />
					</div>
				</div>
			</div>
		</div>
	);
}
