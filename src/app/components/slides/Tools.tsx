"use client";
import {useEffect, useState} from "react";

export const ToolItems: { name: string, styles?: string }[] = [
	{name: "TypeScript", styles: "font-semibold"},
	{name: "Python", styles: "font-semibold"},
	{name: "V lang", styles: "font-semibold"},
	{name: "C#", styles: "font-semibold"},
	{name: "C", styles: "font-semibold"},
	{name: "Redis"},
	{name: "PostgreSQL"},
	{name: "Firebase"},
	{name: "Supabase"},
	{name: "Prisma"},
	{name: "Express"},
	{name: "Node JS"},
	{name: "Next JS"},
	{name: "React"},
	{name: "Tailwind"},
	{name: "Chakra UI"},
	{name: "Git"},
	{name: "Docker"},
	{name: "Monorepo"},
	{name: "Turborepo"},
];
const GradientSteps = ToolItems.length * 7;
const GradientColours = ["#ab1b71", "#563ca4", "#2873c9", "#28c9a3", "#af8b31", "#ab411b"]


export const Tools = () => {
	const [additionalStep, setAdditionalStep] = useState(0);

	useEffect(() => {
		const interval = setInterval((() =>
			setAdditionalStep(prev => {
				return (prev + 1) % GradientSteps
			})
		), 100);

		return () => clearInterval(interval);
	}, [])

	return (
		<div
			className={"flex w-full"}
		>
			<div className={"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 w-full gap-2"}>
				{ToolItems.map((tool, index) => {
					return (
						<div key={tool.name + "_tool_item"}
								 style={{background: fadeBetween(GradientColours, GradientSteps, (index + additionalStep) % GradientSteps)}}
								 className={`col-span-1 w-full flex flex-row px-2 py-1 text-white items-center justify-center border-2 black-500 dark:border-black-200 rounded-lg ${tool.styles ?? ""}`}>
							{tool.name}
						</div>
					)
				})}
			</div>
		</div>
	)
}

function fadeBetween(
	colours: string[],
	steps: number,
	step: number
): string {
	const colourSteps = steps / colours.length;
	const colourIndex = Math.floor(step / colourSteps);
	const nextColourIndex = (colourIndex + 1) % colours.length ;
	const percent = (step / colourSteps) % 1;

	let result = "#";
	for (let i = 1; i < 4; i++) {
		result += makeTwoDigits(getNewFadeValue(percent, colours[colourIndex], colours[nextColourIndex], i).toString(16));
	}
	return result;
}

function makeTwoDigits(input: string){
	while (input.length < 2) {
		input = "0" + input;
	}
	return input;
}

function getNewFadeValue(
	percent: number,
	colourA: string,
	colourB: string,
	part: number
): number {
	const colourPart = part * 2;
	return Math.floor(
		parseInt(colourA.substring(colourPart - 1, colourPart + 1), 16) *
		(1 - percent) +
		parseInt(colourB.substring(colourPart - 1, colourPart + 1), 16) * percent
	);
}
