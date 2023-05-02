import '../globals.css'
import {Header} from "@/app/components/Header";

export const metadata = {
	title: 'Alfie Ranstead',
	description: 'Alfie Ranstead is a software engineer based in England, UK.',
}

export default function RootLayout({children}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<head>
			<title>Alfie Ranstead</title>
			<link rel="icon" href="/favicon.ico?v=2"/>
			<meta lang={"en-GB"}/>
		</head>
		<body>
		<div className={"flex flex-1 flex-col w-full h-fit max-h-screen items-center space-y-4"}>
			<div
				className={"fixed flex items-center justify-center z-30 bg-white dark:bg-black-700 w-full p-1 space-y-4 w-full flex-col h-fit"}>
				<div className={"flex flex-col max-w-[800px] w-full p-2 pt-4"}>
					<Header/>
					<div className={"w-full max-w-[800px] h-0 border-b-2 mt-2 border-black dark:border-white"}/>
				</div>
			</div>
			<div className={"z-10 py-16 flex flex-col w-full h-fit items-center overflow-x-hidden"}>
				<div className={"flex flex-col w-full max-w-[800px] p-4"}>
					{children}
				</div>
			</div>
		</div>
		</body>
		</html>
	)
}
