"use client";
import {useEffect, useState} from "react";

export const ToolItems: { name: string, logo?: JSX.Element }[] = [
	{name: "TypeScript"},
	{name: "Python"},
	{name: "V lang"},
	{name: "C#"},
	{name: "C"},
	{name: "Yarn"},
	{name: "React"},
	{name: "Redis"},
	{name: "PostgreSQL"},
	{name: "Firebase"},
	{name: "Firestore"},
	{name: "Supabase"},
	{name: "Docker"},
	{name: "Express"},
	{name: "Prisma"},
	{name: "Node JS"},
	{name: "Next JS"},
	{name: "ChakraUI"},
	{name: "Monorepos"},
	{name: "Turborepo"},
];

export const Tools = () => {
	const [additionalStep, setAdditionalStep] = useState(0);

	useEffect(() => {
		const interval = setInterval((() =>
			setAdditionalStep(prev => {
				return (prev + 1) % ToolItems.length
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
								 style={{background: fadeBetween("#ab1b92", "#4c3ca4", ToolItems.length, (index + additionalStep) % ToolItems.length)}}
								 className={`col-span-1 w-full flex flex-row px-2 py-1 text-white items-center justify-center border-2 black-500 dark:border-black-200 rounded-lg`}>
							{tool.name}
						</div>
					)
				})}
			</div>
		</div>
	)
}

function abs(input: number) {
	if (input > 0) return input;
	return -input;
}

function fadeBetween(
	colourA: string,
	colourB: string,
	steps: number,
	step: number
): string {
	const halfSteps = steps / 2
	const stepRatio = abs(halfSteps - step) / halfSteps;

	let result = "#";
	for (let i = 1; i < 4; i++) {
		result += makeTwoDigits(getNewFadeValue(stepRatio, colourA, colourB, i).toString(16));
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
	stepRatio: number,
	colourA: string,
	colourB: string,
	step: number
): number {
	const dblStep = step * 2;
	return Math.floor(
		parseInt(colourA.substring(dblStep - 1, dblStep + 1), 16) *
		(1 - stepRatio) +
		parseInt(colourB.substring(dblStep - 1, dblStep + 1), 16) * stepRatio
	);
}
