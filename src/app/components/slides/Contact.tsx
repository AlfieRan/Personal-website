"use client";

import {LinkedLogo, TwitterLogo, DiscordLogo, GithubLogo} from "@/app/components/logos";
import {EnvelopeIcon, ExclamationTriangleIcon, PaperAirplaneIcon} from "@heroicons/react/24/solid";
import {useCallback, useState} from "react";
import {checkContact} from "@/utils/contact";

type ViewStates = "main" | "error" | "success"
type SetViewState = (input: ViewStates) => void

export const ContactSlide = () => {
	const [viewState, setViewState] = useState<ViewStates>("main")

	return (
		<div
			className={"flex flex-col md:flex-row w-full h-fit items-center justify-between bg-white dark:bg-black-700 dark:border-2 dark:border-black-200 rounded-lg shadow-lg overflow-hidden"}>
			<div
				className={"flex flex-col h-[300px] justify-center px-6 w-full md:w-[50%] space-y-2 bg-gray-50 dark:bg-black-400 dark:border-black-200 border-b-2 md:border-r-2 md:border-b-0"}>
				{viewState === "main" ? <SendMessage setState={setViewState}/> : viewState === "success" ?
					<MessageSuccess setState={setViewState}/> : <MessageError setState={setViewState}/>}
			</div>
			<div className={"flex flex-col h-[300px] items-center justify-center p-8 w-full md:w-[50%]"}>
				<div className={"flex flex-col space-y-1 items-start"}>
					<a className={"contactItem"} href={"https://twitter.com/AlfieRanstead"} target={"_blank"}>
						<TwitterLogo size={"20"}/>
						<p>@AlfieRanstead</p>
					</a>
					<a className={"contactItem"} href={"mailto:hi@alfieranstead.com"} target={"_blank"}>
						<EnvelopeIcon className={"w-[20px] h-[20px]"}/>
						<p>hi@AlfieRanstead.com</p>
					</a>
					<a className={"contactItem"} href={"https://www.linkedin.com/in/alfie-ranstead-661064225/"} target={"_blank"}>
						<LinkedLogo size={"20"}/>
						<p>Alfie Ranstead</p>
					</a>
					<a className={"contactItem"} href={"https://www.discord.com/"} target={"_blank"}>
						<DiscordLogo size={"20"}/>
						<p>Uno#6088</p>
					</a>
					<a className={"contactItem"} href={"https://github.com/AlfieRan"} target={"_blank"}>
						<GithubLogo size={"20"}/>
						<p>AlfieRan</p>
					</a>
				</div>
			</div>
		</div>
	);
}

const SendMessage = ({setState}: { setState: SetViewState }) => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("")
	const [error, setError] = useState<false | "email" | "message">(false);
	const [loading, setLoading] = useState(false);

	const submit = useCallback(async () => {
		setLoading(true);
		const checkInputs = checkContact(email, message);
		if (checkInputs !== true) {
			setLoading(false);
			return setError(checkInputs);
		}

		const options: RequestInit = {
			method: "POST",
			body: JSON.stringify({
				email,
				message
			})
		}

		const response = await fetch("/api/sendMessage", options);
		if (!response.ok) {
			setLoading(false);
			return setState("error");
		}

		try {
			const res = await response.json();
			if (res.success) {
				setLoading(false);
				return setState("success");
			}


			const error = res.error === "email" ? "email" : "message"
			setLoading(false);
			return setError(error);
		} catch (e) {
			console.error(e)
			setLoading(false);
			return setState("error");
		}
	}, [email, message])

	return (
		<>
			<span className={"text-lg font-semibold"}>Get in Contact</span>
			<input
				className={"w-full border-2 rounded-lg px-3 py-2 dark:bg-black-200 dark:border-black-100"}
				style={{borderColor: error === "email" ? "red" : "gray-200"}}
				placeholder={"email@example.com"}
				value={email}
				onChange={(e) => setEmail(e.currentTarget.value)}
			/>
			<textarea
				className={"w-full border-2 rounded-lg px-3 py-2 dark:bg-black-200 dark:border-black-100"}
				placeholder={"Hi! I'm {name} and I wanted to say that I love backflips."}
				value={message}
				onChange={(e) => setMessage(e.currentTarget.value)}
			/>
			<div className={"flex w-full h-0"}/>
			<button
				className={"w-full bg-blue-500 text-white rounded-lg px-3 py-2 duration-75 ease-in-out hover:scale-[1.02] active:scale-[0.98]"}
				onClick={submit}
				disabled={loading}
				aria-disabled={loading}
			>
				{loading ? (<span className={"text-gray-400"}>Sending...</span>) : (<span>Send Message</span>)}
			</button>
		</>
	);
}

const MessageSuccess = ({setState}: { setState: SetViewState }) => (
	<>
		<div className={"flex flex-row w-full justify-center items-center space-x-2"}>
			<PaperAirplaneIcon className={"h-8"}/>
			<span className={"text-3xl text-center font-semibold"}>Message Sent</span>
		</div>

		<span className={"text-center"}>I&apos;ll try and get back to you as soon as I can!</span>
		<div className={"flex w-full h-0"}/>
		<button
			className={"w-full bg-blue-200 text-black-700 rounded-lg px-3 py-2 duration-75 ease-in-out hover:text-white active:text-white hover:bg-blue-400 active:bg-blue-500"}
			onClick={() => setState("main")}
		>
			Send Another
		</button>
	</>
);

const MessageError = ({setState}: { setState: SetViewState }) => (
	<>
		<div className={"flex flex-row w-full justify-center items-center space-x-2"}>
			<ExclamationTriangleIcon className={"h-8"}/>
			<span className={"text-3xl text-center font-semibold"}>Server Failure</span>
		</div>
		<span
			className={"text-center"}>Something went wrong on my end, please try a different method of communication!</span>
		<div className={"flex w-full h-0"}/>
		<button
			className={"w-full bg-red-200 text-black-700 rounded-lg px-3 py-2 duration-75 ease-in-out hover:text-white hover:bg-red-500 active:text-white active:bg-red-600"}
			onClick={() => setState("main")}
		>Try Again
		</button>
	</>
);