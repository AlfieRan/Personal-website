"use client";
import {ItemWrapper} from "@/app/components/slides/Wrapper";
import {useAnimatedText} from "@/hooks/useAnimatedText";
import {StartsWithVowel} from "@/utils/text";


export function AboutSlide({index}) {
	const {text, setShowing} = useAnimatedText([
		"Software Engineer", "Web Developer", "Student", "Content Creator", "Mathematician", "Problem Solver",
		"Logical Thinker", "Entrepreneur", "Creator"
	])

	return (
		<ItemWrapper index={index} onCreate={() => setShowing(true)} onDestroy={() => setShowing(false)}>
			<img src={"/me.jpg"} className={"w-full md:w-[50%]"}/>
			<div className={"flex flex-col p-5 space-y-5 w-full md:w-[50%]"}>
				<div className={"flex flex-col space-y-0.5"}>
					<p className={"font-semibold text-2xl"}>Hi, I&apos;m <span className={"md:hidden inline"}>Alfie!</span><span
						className={"hidden md:inline"}>Alfie Ranstead!</span></p>
					<p className={"text-lg space-x-1"}>
						<span>A{StartsWithVowel(text.phrase) ? "n" : ""}</span>
						<span className={"font-bold"}>{text.phrase}</span>
						<span>based in the UK</span>
					</p>
				</div>
				<p>
					I&apos;m <span className={"font-bold"}>Extremely Creative</span> and do anything that feeds my need to
					create, especially through technology.
				</p>
				<p>
					The only thing I love almost as much as creating things is <span
					className={"font-bold"}>Problem Solving</span> and once I've found a problem I care about, I'll do
					anything to solve it.
				</p>
				<p>I&apos;ve  creating videos since 10, programming since 9, and striving to be the best from birth.</p>
			</div>
		</ItemWrapper>
	)
}