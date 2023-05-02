"use client";
import {motion} from "framer-motion";

const ALevels = [{
	subject: "Computer Science", grade: "A*"
}, {
	subject: "Further Mathematics", grade: "A"
}, {
	subject: "Mathematics", grade: "A*"
}, {
	subject: "Physics", grade: "A*"
}];

const GCSES = [{
		subject: "Mathematics", grade: "9"
	},
	{
		subject: "Computer Science", grade: "9"
	}, {
		subject: "Physics", grade: "9"
	}, {
		subject: "Chemistry", grade: "9"
	}, {
		subject: "Biology", grade: "9"
	}, {
		subject: "Business Studies", grade: "9"
	}, {
		subject: "Additional Mathematics", grade: "A"
	}, {
		subject: "English Language", grade: "7"
	}, {
		subject: "English Literature", grade: "7"
	}, {
		subject: "Art and Design", grade: "6"
	}, {
		subject: "Spanish", grade: "5"
	}];

export const EducationSlide = () => (
	<div className={"flex flex-col w-full space-y-4"}>
		<div className={"grid grid-cols-2 sm:grid-cols-4 w-full gap-2 md:gap-4"}>
			{ALevels.map(subject => (
				<ALevel subject={subject.subject} grade={subject.grade} key={subject.subject + "_a_level_item"}/>))}
		</div>
		{/*<motion.div*/}
		{/*	className={"grid grid-cols-4 sm:grid-cols-6 w-full gap-4"}*/}
		{/*	initial={{scale: 0.9}}*/}
		{/*	whileInView={{scale: 1}}*/}
		{/*>*/}
		{/*	{GCSES.map(subject => (*/}
		{/*		<GCSE subject={subject.subject} grade={subject.grade} key={subject.subject + "_gcse_item"}/>))}*/}
		{/*</motion.div>*/}
	</div>
);

const ALevel = ({subject, grade}: { subject: string; grade: string }) => (
	<motion.div
		className={"col-span-1 inline-block flex flex-col w-full bg-white dark:bg-black-400 dark:border-2 dark:border-black-200 rounded-lg shadow-lg py-4 px-2 md:px-6 justify-between items-center space-y-3"}
		initial={{scale: 0.8}}
		whileInView={{scale: 1}}
		whileHover={{ scale: 1.05 }}
		transition={{
			ease: "easeInOut",
			duration: 0.15,
		}}
	>
		<div
			className={"flex flex-row items-center justify-center text-center text-sm px-4 py-1 mb-1 rounded-full bg-green-300 text-black-700 font-semibold"}>
			<p>A Level</p>
		</div>
		<div className={"flex flex-col items-center justify-center text-center"}>
			<b className={"text-2xl text-center leading-none"}>{subject}</b>
			<i>June 2023</i>
		</div>
		<b>Predicted: {grade}</b>
	</motion.div>);

const GCSE = ({subject, grade}: { subject: string; grade: string }) => (
	<div
		className={"col-span-1 flex flex-col w-full h-full bg-white rounded-lg shadow-lg py-2 px-4 justify-between items-center space-y-1"}>
		<div
			className={"flex flex-row items-center justify-center text-center text-xs px-3 py-0.5 mb-1 rounded-full bg-orange-300 font-semibold"}>
			<p>GCSE</p>
		</div>
		<div className={"flex flex-col items-center justify-center text-center"}>
			<b className={"text-base text-center leading-none"}>{subject}</b>
			<i className={"text-sm"}>June 2021</i>
		</div>
		<b className={"text-sm"}>Grade {grade}</b>
	</div>
)