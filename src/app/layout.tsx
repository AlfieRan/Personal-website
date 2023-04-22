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
		<body>
		<div className={"flex flex-col w-full h-fit max-h-screen items-center p-4 pb-0 overflow-hidden space-y-4"}>
				<div className={"z-30 w-full flex-col h-fit max-w-[800px]"}>
					<Header/>
				</div>
				<div className={"w-full max-w-[800px] h-0 border-b-2 border-black dark:border-white"}/>
				<div className={"z-10 flex flex-col w-full h-fit items-center overflow-x-hidden overflow-y-scroll"}>
					<div className={"flex flex-col w-full max-w-[800px]"}>
						{children}
					</div>
				</div>
		</div>
		</body>
		</html>
	)
}
