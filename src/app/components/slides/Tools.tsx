"use client";
import {motion} from 'framer-motion';
import fadeBetween from "@/utils/colours";

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

export const Tools = () => (
	<motion.div className={"flex w-full"} initial={{scale: 0.7}} whileInView={{scale: 1}}>
		<div className={"grid grid-cols-5 w-full gap-2"}>
			{ToolItems.map((tool, index) => {
				return (
				<div key={tool.name + "_tool_item"}
						 className={`col-span-1 w-full flex flex-row px-2 py-1 items-center justify-center border-2 black-500 dark:border-black-200 rounded-lg`}>
					{tool.name}
				</div>
			)})}
		</div>
	</motion.div>
)